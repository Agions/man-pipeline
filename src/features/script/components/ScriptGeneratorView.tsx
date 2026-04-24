import React, { useState } from 'react';
import { Card, Space, Typography, Spin } from 'antd';
import NovelImporter from './NovelImporter';
import ScriptGenerator from './ScriptGenerator';
import styles from './ScriptGeneratorView.module.less';

const { Title, Text } = Typography;

/**
 * 脚本生成视图组件
 * 组合 NovelImporter 和 ScriptGenerator
 */
const ScriptGeneratorView: React.FC = () => {
  const [novelMetadata, setNovelMetadata] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleNovelImport = (metadata: any) => {
    setNovelMetadata(metadata);
  };

  const handleGenerationStart = () => {
    setIsGenerating(true);
  };

  const handleGenerationComplete = () => {
    setIsGenerating(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>脚本生成</Title>
        <Text type="secondary">从小说导入并生成视频脚本</Text>
      </div>

      <Space direction="vertical" size="large" className={styles.content}>
        <Card title="导入小说">
          <NovelImporter onContentLoad={(content, metadata) => handleNovelImport(metadata)} />
        </Card>

        {novelMetadata && (
          <Card title="生成脚本">
            {isGenerating && <Spin tip="正在生成脚本..." />}
            <ScriptGenerator
              projectId={undefined}
              onGenerate={undefined}
              onSave={undefined}
            />
          </Card>
        )}
      </Space>
    </div>
  );
};

export default ScriptGeneratorView;