import React from 'react';
import { Typography } from 'antd';
import NotificationCenter from './NotificationCenter';
import styles from './NotificationCenterView.module.less';

const { Title, Text } = Typography;

/**
 * 通知中心视图组件
 */
const NotificationCenterView: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>通知中心</Title>
        <Text type="secondary">查看系统通知和更新</Text>
      </div>

      <NotificationCenter />
    </div>
  );
};

export default NotificationCenterView;