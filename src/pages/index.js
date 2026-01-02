import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/Homepage/HomepageHero';
import HomepageNavigation from '@site/src/components/Homepage/HomepageNavigation';
import HomepageFeatures from '@site/src/components/Homepage/HomepageFeatures';
import HomepageImages from '@site/src/components/HomepageImages/HomepageImages';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={`ROS 2 Nervous System`}
      description="Empowering students with practical robotics and AI learning resources">

      <main>
        {/* Hero Section - Using new consistent component */}
        <HomepageHero />

        {/* Breadcrumb-style navigation */}
        <HomepageNavigation />

        {/* Homepage Images Section - Middle section with educational images */}
        <HomepageImages />

        {/* Features Section - Using new consistent component */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
