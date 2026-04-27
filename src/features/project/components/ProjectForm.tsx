import { useForm } from 'react-hook-form';
import React from 'react';

import { toast } from 'sonner';

import type { Project } from '@/types';

import styles from './ProjectForm.module.less';

interface ProjectFormProps {
  initialValues?: Partial<Project>;
  onSubmit: (values: Partial<Project>) => Promise<void>;
  loading?: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  initialValues,
  onSubmit,
  loading = false,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Partial<Project>>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = async (values: Partial<Project>) => {
    try {
      await onSubmit(values);
      toast.success('保存成功');
    } catch (error) {
      toast.error('保存失败');
    }
  };

  return (
    <form
      layout="vertical"
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.form}
    >
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>项目名称</label>
        <input
          id="name"
          type="text"
          placeholder="请输入项目名称"
          className={styles.input}
          {...register('name', { required: '请输入项目名称' })}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="description" className={styles.label}>项目描述</label>
        <textarea
          id="description"
          placeholder="请输入项目描述"
          rows={4}
          className={styles.textarea}
          {...register('description', { required: '请输入项目描述' })}
        />
        {errors.description && <span className={styles.error}>{errors.description.message}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="videoUrl" className={styles.label}>视频链接</label>
        <input
          id="videoUrl"
          type="url"
          placeholder="请输入视频链接"
          className={styles.input}
          {...register('videoUrl', {
            required: '请输入视频链接',
            pattern: { value: /^https?:\/\/.+/, message: '请输入有效的视频链接' },
          })}
        />
        {errors.videoUrl && <span className={styles.error}>{errors.videoUrl.message}</span>}
      </div>

      <button type="submit" disabled={loading} className={styles.submitBtn}>
        {loading ? '保存中...' : '保存'}
      </button>
    </form>
  );
};

export default ProjectForm;
