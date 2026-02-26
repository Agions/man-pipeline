/**
 * 漫剧工作流服务
 * 优化版 - 模块化架构
 */

import {
  WorkflowStep,
  WorkflowConfig,
  ComicDramaProject,
  WorkflowEvent,
  WorkflowEventListener,
} from './types';
import { createInitialSteps, STEP_ORDER } from './steps';
import { getExecutor } from './executors';

class WorkflowService {
  private projects: Map<string, ComicDramaProject> = new Map();
  private listeners: WorkflowEventListener[] = [];
  private runningProjects: Set<string> = new Set();

  // 创建项目
  createProject(name: string, config: WorkflowConfig): ComicDramaProject {
    const project: ComicDramaProject = {
      id: `project-${Date.now()}`,
      name,
      config,
      steps: createInitialSteps(),
      currentStep: 0,
      status: 'idle',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      output: {},
    };

    this.projects.set(project.id, project);
    return project;
  }

  // 获取项目
  getProject(id: string): ComicDramaProject | undefined {
    return this.projects.get(id);
  }

  // 获取所有项目
  getAllProjects(): ComicDramaProject[] {
    return Array.from(this.projects.values()).sort((a, b) => b.createdAt - a.createdAt);
  }

  // 删除项目
  deleteProject(id: string): void {
    this.projects.delete(id);
    this.runningProjects.delete(id);
  }

  // 订阅事件
  subscribe(listener: WorkflowEventListener): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  // 发送事件
  private emit(event: WorkflowEvent): void {
    this.listeners.forEach((listener) => listener(event));
  }

  // 更新步骤
  private updateStep(
    project: ComicDramaProject,
    stepIndex: number,
    updates: Partial<WorkflowStep>
  ): void {
    const step = project.steps[stepIndex];
    if (step) {
      Object.assign(step, updates);
      project.updatedAt = Date.now();
    }
  }

  // 执行步骤
  private async executeStep(project: ComicDramaProject, stepIndex: number): Promise<void> {
    const step = project.steps[stepIndex];
    if (!step) return;

    const executor = getExecutor(step.type);
    if (!executor) {
      throw new Error(`未知步骤类型: ${step.type}`);
    }

    // 更新步骤状态
    this.updateStep(project, stepIndex, {
      status: 'running',
      startTime: Date.now(),
      progress: 0,
    });

    // 发送开始事件
    this.emit({
      type: 'stepStart',
      projectId: project.id,
      stepType: step.type,
      stepIndex,
      timestamp: Date.now(),
    });

    try {
      // 执行步骤
      const result = await executor({
        project,
        step,
        onProgress: (progress) => {
          this.updateStep(project, stepIndex, { progress });
          this.emit({
            type: 'stepProgress',
            projectId: project.id,
            stepType: step.type,
            stepIndex,
            progress,
            timestamp: Date.now(),
          });
        },
      });

      // 更新项目输出
      if (result) {
        project.output = { ...project.output, ...result };
      }

      // 完成步骤
      this.updateStep(project, stepIndex, {
        status: 'completed',
        endTime: Date.now(),
        progress: 100,
        output: result,
      });

      this.emit({
        type: 'stepComplete',
        projectId: project.id,
        stepType: step.type,
        stepIndex,
        timestamp: Date.now(),
      });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : '执行失败';

      this.updateStep(project, stepIndex, {
        status: 'failed',
        endTime: Date.now(),
        error: errorMsg,
      });

      this.emit({
        type: 'stepFail',
        projectId: project.id,
        stepType: step.type,
        stepIndex,
        error: errorMsg,
        timestamp: Date.now(),
      });

      throw error;
    }
  }

  // 运行工作流
  async runWorkflow(projectId: string): Promise<void> {
    const project = this.projects.get(projectId);
    if (!project) {
      throw new Error('项目不存在');
    }

    if (this.runningProjects.has(projectId)) {
      throw new Error('工作流已在运行');
    }

    this.runningProjects.add(projectId);
    project.status = 'running';

    try {
      for (let i = project.currentStep; i < STEP_ORDER.length; i++) {
        // 检查是否暂停
        if (project.status === 'paused') {
          break;
        }

        project.currentStep = i;
        await this.executeStep(project, i);

        // 检查是否自动继续
        if (!project.config.autoProceed && i < STEP_ORDER.length - 1) {
          break;
        }
      }

      // 检查是否完成
      if (project.currentStep >= STEP_ORDER.length - 1) {
        project.status = 'completed';
        this.emit({
          type: 'workflowComplete',
          projectId: project.id,
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      project.status = 'failed';
      this.emit({
        type: 'workflowFail',
        projectId: project.id,
        error: error instanceof Error ? error.message : '工作流失败',
        timestamp: Date.now(),
      });
      throw error;
    } finally {
      this.runningProjects.delete(projectId);
    }
  }

  // 暂停工作流
  pauseWorkflow(projectId: string): void {
    const project = this.projects.get(projectId);
    if (project && project.status === 'running') {
      project.status = 'paused';
    }
  }

  // 恢复工作流
  async resumeWorkflow(projectId: string): Promise<void> {
    const project = this.projects.get(projectId);
    if (project && project.status === 'paused') {
      project.status = 'running';
      await this.runWorkflow(projectId);
    }
  }

  // 跳过步骤
  skipStep(projectId: string, stepIndex: number): void {
    const project = this.projects.get(projectId);
    if (project) {
      this.updateStep(project, stepIndex, { status: 'skipped', progress: 100 });
    }
  }

  // 重试步骤
  async retryStep(projectId: string, stepIndex: number): Promise<void> {
    const project = this.projects.get(projectId);
    if (project) {
      this.updateStep(project, stepIndex, { status: 'pending', progress: 0, error: undefined });
      await this.executeStep(project, stepIndex);
    }
  }
}

// 导出单例
export const workflowService = new WorkflowService();

// 导出类型
export * from './types';
export * from './steps';
export * from './executors';

// 兼容旧导出
export default workflowService;
