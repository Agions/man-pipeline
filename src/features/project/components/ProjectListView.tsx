import { Plus, Edit, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

import type { Project } from '@/types';

import styles from './ProjectListView.module.less';

/**
 * 项目列表视图组件
 * 展示所有项目的列表视图
 */
const ProjectListView: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载数据
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateProject = () => {
    navigate('/project/new');
  };

  const handleEditProject = (project: Project) => {
    navigate(`/project/${project.id}/edit`);
  };

  const handleDeleteProject = (project: Project) => {
    toast.info(`删除项目: ${project.name}`);
    // 实现删除逻辑
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>我的项目</h2>
        <Button variant="default" icon={<Plus />} onClick={handleCreateProject}>
          新建项目
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {projects.map((project) => (
          <Card
            key={project.id}
            hoverable
            className={styles.projectCard}
          >
            <div className={styles.cardContent}>
              <h3>{project.name}</h3>
              <p style={{ color: 'rgba(0,0,0,0.45)', fontSize: 14 }}>{project.description}</p>
              <p style={{ color: 'rgba(0,0,0,0.45)', fontSize: 13 }} className={styles.date}>
                创建于: {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : '-'}
              </p>
            </div>
            <div className={styles.cardActions}>
              <Button variant="ghost" size="sm" icon={<Edit />} onClick={() => handleEditProject(project)} />
              <Button variant="ghost" size="sm" icon={<Trash2 />} onClick={() => handleDeleteProject(project)} />
            </div>
          </Card>
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <div className={styles.empty}>
          <span style={{ color: 'rgba(0,0,0,0.45)' }}>暂无项目，点击"新建项目"开始创作</span>
        </div>
      )}
    </div>
  );
};

export default ProjectListView;