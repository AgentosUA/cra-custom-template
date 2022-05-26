import { Sidebar } from '@modules/sidebar';
import type { LayoutProps } from './layout.props';
import type { FC } from 'react';

import styles from './layout.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Sidebar />
    {children}
  </div>
);

export { Layout };
