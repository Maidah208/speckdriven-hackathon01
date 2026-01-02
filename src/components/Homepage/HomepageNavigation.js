import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageNavigation.module.css';

export default function HomepageNavigation() {
  return (
    <nav className={styles.breadcrumbNav} aria-label="Breadcrumb navigation">
      <div className="container">
        <div className={styles.breadcrumbList} role="navigation">
          <Link to="/" className={clsx(styles.breadcrumbItem, styles.current)} aria-current="page">
            Home
          </Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">›</span>
          <Link to="/docs/intro" className={styles.breadcrumbItem}>
            Modules
          </Link>
        </div>
      </div>
    </nav>
  );
}