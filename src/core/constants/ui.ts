/**
 * UI 相关常量
 */

// 动画配置
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    default: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

// 主题配置
export const THEME = {
  colors: {
    primary: '#1890ff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    info: '#1890ff',
    text: {
      primary: 'rgba(0, 0, 0, 0.85)',
      secondary: 'rgba(0, 0, 0, 0.65)',
      disabled: 'rgba(0, 0, 0, 0.45)',
    },
    bg: {
      base: '#f0f2f5',
      elevated: '#ffffff',
      layout: '#f5f5f5',
    },
    border: '#d9d9d9',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
} as const;

// 分页配置
export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100'],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total: number) => `共 ${total} 条`,
} as const;

// 表格配置
export const TABLE_CONFIG = {
  scroll: { x: 'max-content' },
  pagination: PAGINATION,
  rowKey: 'id',
} as const;

// 消息配置
export const MESSAGE_CONFIG = {
  duration: 3,
  maxCount: 3,
} as const;

// 通知配置
export const NOTIFICATION_CONFIG = {
  placement: 'topRight',
  duration: 4.5,
} as const;

// 模态框配置
export const MODAL_CONFIG = {
  centered: true,
  maskClosable: false,
  destroyOnClose: true,
} as const;

// 抽屉配置
export const DRAWER_CONFIG = {
  placement: 'right',
  width: 480,
  destroyOnClose: true,
} as const;
