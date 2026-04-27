import React, { PropsWithChildren } from 'react';

import styles from './AppLayout.module.less';
import { AppLayoutProps } from './types';

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  header,
  sidebar,
  footer,
}) => {
  return (
    <div className={styles.appLayout}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.mainRow}>
        {sidebar && <div className={styles.sidebar}>{sidebar}</div>}
        <div className={styles.content}>{children}</div>
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default AppLayout;

// Named slot exports for compositional API
export const AppLayoutHeader: React.FC<PropsWithChildren> = ({ children }) => <>{children}</>;
export const AppLayoutSidebar: React.FC<PropsWithChildren> = ({ children }) => <>{children}</>;
export const AppLayoutContent: React.FC<PropsWithChildren> = ({ children }) => <>{children}</>;
export const AppLayoutFooter: React.FC<PropsWithChildren> = ({ children }) => <>{children}</>;