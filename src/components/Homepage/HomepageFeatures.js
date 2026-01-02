import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Core Concepts',
    description: (
      <>
        Start with fundamental ROS 2 concepts including nodes, topics, services, and actions that form the foundation of robotic systems.
      </>
    ),
    to: '/docs/modules/ros2-robotics/',
    icon: '📚',
  },
  {
    title: 'Practical Modules',
    description: (
      <>
        Hands-on modules with real-world examples covering navigation, perception, manipulation, and control systems for robotics.
      </>
    ),
    to: '/docs/modules/digital-twin/intro',
    icon: '🛠️',
  },
  {
    title: 'Advanced Topics',
    description: (
      <>
        Deepen your knowledge with advanced topics including multi-robot systems, AI integration, and complex robotic architectures.
      </>
    ),
    to: '/docs/modules/vla-robotics/intro',
    icon: '🚀',
  },
];

function Feature({ Svg, title, description, to, icon }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureCardInner} role="listitem">
        <div className={styles.featureIcon} aria-hidden="true">
          {icon}
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.featureButtonContainer}>
          <Link
            className={clsx('button button--secondary button--lg', styles.featureButton)}
            to={to}
            aria-label={`Learn more about ${title}`}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection} aria-label="Educational modules overview">
      <div className="container">
        <div className="row" role="list">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}