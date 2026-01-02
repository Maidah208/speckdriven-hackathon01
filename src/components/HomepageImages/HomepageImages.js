import React from 'react';
import clsx from 'clsx';
import styles from './HomepageImages.module.css';

const FeatureList = [
  {
    title: 'Robotics Concepts',
    imageUrl: 'https://img.freepik.com/premium-vector/robotics-concept-illustration_114360-1569.jpg',
    fallbackUrl: '/img/homepage/robotics-concept-1.jpg',
    description: (
      <>
        Explore fundamental robotics concepts through visual representations of robot architectures, kinematics, and control systems.
      </>
    ),
    altText: 'Illustration of robotics concepts showing robot architecture and kinematics',
  },
  {
    title: 'AI Visualization',
    imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-ai-generating-artworks-illustration_23-2151106556.jpg?semt=ais_hybrid&w=740&q=80',
    fallbackUrl: '/img/homepage/ai-visualization-1.jpg',
    description: (
      <>
        Understand artificial intelligence concepts through visual examples of neural networks, machine learning processes, and AI decision-making.
      </>
    ),
    altText: 'Visualization of AI concepts showing neural networks and machine learning processes',
  },
  {
    title: 'Educational Robots',
    imageUrl: 'https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration_1284-82523.jpg?semt=ais_hybrid&w=740&q=80',
    fallbackUrl: '/img/homepage/educational-robot-1.jpg',
    description: (
      <>
        Learn about educational robotics platforms designed for learning and experimentation in humanoid robot control.
      </>
    ),
    altText: 'Educational robots used for learning and experimenting with humanoid robot control',
  },
];

function Feature({imageUrl, fallbackUrl, title, description, altText}) {
  const [imageSrc, setImageSrc] = React.useState(imageUrl);

  const handleError = () => {
    // Fallback to JPEG if WebP fails
    setImageSrc(fallbackUrl);
  };

  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <img
          src={imageSrc}
          onError={handleError}
          alt={altText}
          className={styles.featureImage}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageImages() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}