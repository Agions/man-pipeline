import { Typography } from 'antd';
import React from 'react';

import SubtitleEditor from './SubtitleEditor';
import styles from './SubtitleEditorView.module.less';

const { Title, Text } = Typography;

/**
 * 字幕编辑视图组件
 * 组合字幕编辑功能
 */
interface SubtitleEditorViewProps {
  projectId?: string;
  videoPath?: string;
  onSave?: (subtitleData: any) => void;
}

const SubtitleEditorView: React.FC<SubtitleEditorViewProps> = ({ projectId: _projectId, videoPath: _videoPath, onSave: _onSave }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>字幕编辑</Title>
        <Text type="secondary">编辑视频字幕和时间轴</Text>
      </div>

      <SubtitleEditor subtitles={[]} onChange={() => {}} />
    </div>
  );
};

export default SubtitleEditorView;