import React from 'react';
import { Typography, Space } from 'antd';
import AudioEditor from './AudioEditor';
import styles from './AudioEditorView.module.less';

const { Title, Text } = Typography;

/**
 * 音频编辑视图组件
 * 组合音频编辑功能
 */
interface AudioEditorViewProps {
  projectId?: string;
  onSave?: (config: any) => void;
}

const AudioEditorView: React.FC<AudioEditorViewProps> = ({ projectId, onSave }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>音频编辑</Title>
        <Text type="secondary">配置背景音乐、音效和配音</Text>
      </div>

      <AudioEditor projectId={projectId} onSave={onSave} />
    </div>
  );
};

export default AudioEditorView;