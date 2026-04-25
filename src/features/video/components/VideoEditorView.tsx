import { convertFileSrc } from '@tauri-apps/api/core';
import { Card, Space, Typography, Row, Col } from 'antd';
import React, { useState } from 'react';

import VideoAnalyzer from './VideoAnalyzer';
import styles from './VideoEditorView.module.less';
import VideoExporter from './VideoExporter';
import VideoInfo from './VideoInfo';
import VideoPlayer from './VideoPlayer';
import VideoSelector from './VideoSelector';
import VideoUploader from './VideoUploader';

const { Title, Text } = Typography;

/**
 * 视频编辑视图组件
 * 组合所有视频处理组件
 */
const VideoEditorView: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<any>(null);

  const handleVideoSelect = (videoPath: string) => {
    setSelectedVideo(videoPath);
  };

  const handleVideoUpload = (videoPath: string) => {
    setSelectedVideo(videoPath);
  };

  const handleAnalysisComplete = (info: any) => {
    setVideoInfo(info);
  };

  const videoSrc = selectedVideo ? convertFileSrc(selectedVideo) : '';

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>视频处理</Title>
        <Text type="secondary">选择、上传、分析和处理视频素材</Text>
      </div>

      <Row gutter={16}>
        <Col span={16}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Card title="选择视频">
              <VideoSelector onVideoSelect={handleVideoSelect} />
            </Card>

            <Card title="上传视频">
              <VideoUploader onUploadSuccess={handleVideoUpload} />
            </Card>

            {selectedVideo && (
              <>
                <Card title="视频预览">
                  <VideoPlayer src={videoSrc} />
                </Card>

                <Card title="视频分析">
                  <VideoAnalyzer
                    projectId="current"
                    videoUrl={selectedVideo}
                    onAnalysisComplete={handleAnalysisComplete}
                  />
                </Card>
              </>
            )}
          </Space>
        </Col>

        <Col span={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {videoInfo && (
              <Card title="视频信息">
                <VideoInfo
                  name={selectedVideo?.split('/').pop() || 'video'}
                  duration={videoInfo?.duration || 0}
                  path={selectedVideo || ''}
                  metadata={videoInfo}
                />
              </Card>
            )}

            {selectedVideo && (
              <Card title="导出视频">
                <VideoExporter projectName={selectedVideo?.split('/').pop() || 'video'} />
              </Card>
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default VideoEditorView;
