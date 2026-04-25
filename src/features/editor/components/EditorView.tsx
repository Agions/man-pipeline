import { Layout, Space } from 'antd';
import React from 'react';

import AIAssistant from './editor/AIAssistant';
import AIFeaturePanel from './editor/AIFeaturePanel';
import AssetPanel from './editor/AssetPanel';
import Preview from './editor/Preview';
import PropertyPanel from './editor/PropertyPanel';
import Timeline from './editor/Timeline';
import styles from './EditorView.module.less';

const { Sider, Content } = Layout;

/**
 * 编辑器视图组件
 * 组合所有编辑器组件
 */
interface EditorViewProps {
  projectId?: string;
}

const EditorView: React.FC<EditorViewProps> = ({ projectId: _projectId }) => {
  return (
    <Layout className={styles.container}>
      <Sider width={280} className={styles.leftSider}>
        <AssetPanel />
      </Sider>

      <Layout className={styles.mainLayout}>
        <Content className={styles.content}>
          <Preview />
        </Content>

        <Timeline currentTime={0} duration={0} tracks={[]} onTimeUpdate={() => {}} />
      </Layout>

      <Sider width={320} className={styles.rightSider}>
        <PropertyPanel />
        <AIFeaturePanel />
        <AIAssistant />
      </Sider>
    </Layout>
  );
};

export default EditorView;