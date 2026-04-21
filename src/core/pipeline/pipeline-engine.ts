import { PipelineStep, StepInput, StepOutput, PipelineOptions } from './step.interface';

export { PipelineStep };

export class PipelineEngine {
  private steps: PipelineStep[] = [];
  private options: PipelineOptions;

  constructor(options: PipelineOptions = {}) {
    this.options = options;
  }

  addStep(step: PipelineStep): this {
    this.steps.push(step);
    return this;
  }

  async run(input: StepInput): Promise<StepOutput> {
    let context: StepInput = { ...input };

    for (const step of this.steps) {
      try {
        this.options.onProgress?.(step.id, 0);
        const result = await step.process(context);
        context = { ...context, ...result };
        this.options.onProgress?.(step.id, 1);
      } catch (error) {
        this.options.onError?.(step.id, error as Error);
        throw error;
      }
    }

    this.options.onComplete?.(context as StepOutput);
    return context as StepOutput;
  }

  getSteps(): PipelineStep[] {
    return [...this.steps];
  }
}
