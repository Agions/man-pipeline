/**
 * 专业工作流创建页面
 */

import React, { useState } from 'react';
import { 
  Card, 
  Button, 
  Steps, 
  Typography, 
  Space, 
  Select,
  Slider,
} from 'antd';
import { UploadOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.less';

const { Title, Text } = Typography;

// 模拟数据
const MODELS = [
  { value: 'gpt-4', label: 'GPT-4' },
  { value: 'gpt-3.5', label: 'GPT-3.5' },
  { value: 'claude', label: 'Claude' },
];

const WORKFLOW_STEPS = [
  { title: 'Import' },
  { title: 'Generate' },
  { title: 'Storyboard' },
  { title: 'Character' },
  { title: 'Render' },
  { title: '合成' },
  { title: 'Export' },
];

export default function Workflow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [chapters, setChapters] = useState(12);

  const handleStart = () => {
    navigate('/video-studio');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>AI 漫剧工作流</Title>
        <Text type="secondary">Create your AI comic drama</Text>
      </div>

      <Steps 
        current={currentStep} 
        items={WORKFLOW_STEPS}
        className={styles.steps}
      />

      <Card className={styles.formCard}>
        <div className={styles.formGroup}>
          <Text strong>AI Model</Text>
          <Select
            value={selectedModel}
            onChange={setSelectedModel}
            options={MODELS}
            size="large"
            className={styles.select}
          />
        </div>

        <div className={styles.formGroup}>
          <Text strong>Chapters: {chapters}</Text>
          <Slider 
            min={1} 
            max={20} 
            value={chapters}
            onChange={setChapters}
          />
        </div>
      </Card>

      <div className={styles.actions}>
        <Button type="primary" icon={<PlayCircleOutlined />} onClick={handleStart}>
          Start Workflow
        </Button>
      </div>
    </div>
  );
}
