import React from 'react';
import clsx from 'clsx';
import styles from './HomepageHero.module.css';

function HomepageHero() {
  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)} aria-label="Introduction to ROS 2 Nervous System">
      <div className="container">
        <h1 className="hero__title">ROS 2 Nervous System</h1>
        <p className="hero__subtitle">
          Empowering students with practical robotics and AI learning resources.
        </p>
        <div className={styles.buttons} role="group" aria-label="Module access options">
          <a
            className="button button--secondary button--lg"
            href="/docs/intro"
            target="_self"
            rel="noopener noreferrer"
            aria-label="Get started with modules"
          >
            Get Started with Modules
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;