import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6c0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '82d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '94f'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ai-robot-brain/assets/isaac-ros-diagram',
                component: ComponentCreator('/docs/modules/ai-robot-brain/assets/isaac-ros-diagram', 'ebb'),
                exact: true
              },
              {
                path: '/docs/modules/ai-robot-brain/assets/isaac-sim-diagram',
                component: ComponentCreator('/docs/modules/ai-robot-brain/assets/isaac-sim-diagram', 'e75'),
                exact: true
              },
              {
                path: '/docs/modules/ai-robot-brain/assets/nav2-diagram',
                component: ComponentCreator('/docs/modules/ai-robot-brain/assets/nav2-diagram', '315'),
                exact: true
              },
              {
                path: '/docs/modules/ai-robot-brain/chapter-1-isaac-sim',
                component: ComponentCreator('/docs/modules/ai-robot-brain/chapter-1-isaac-sim', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ai-robot-brain/chapter-2-isaac-ros-vslam',
                component: ComponentCreator('/docs/modules/ai-robot-brain/chapter-2-isaac-ros-vslam', '2d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ai-robot-brain/chapter-3-nav2-path-planning',
                component: ComponentCreator('/docs/modules/ai-robot-brain/chapter-3-nav2-path-planning', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ai-robot-brain/intro',
                component: ComponentCreator('/docs/modules/ai-robot-brain/intro', '1e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/digital-twin/chapter-1-gazebo-physics-simulation',
                component: ComponentCreator('/docs/modules/digital-twin/chapter-1-gazebo-physics-simulation', '332'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/digital-twin/chapter-2-unity-environment-design',
                component: ComponentCreator('/docs/modules/digital-twin/chapter-2-unity-environment-design', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/digital-twin/chapter-3-sensor-simulation',
                component: ComponentCreator('/docs/modules/digital-twin/chapter-3-sensor-simulation', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/digital-twin/intro',
                component: ComponentCreator('/docs/modules/digital-twin/intro', 'e17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ros2-robotics/',
                component: ComponentCreator('/docs/modules/ros2-robotics/', 'ec4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ros2-robotics/chapter-1-ros2-basics',
                component: ComponentCreator('/docs/modules/ros2-robotics/chapter-1-ros2-basics', '0ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ros2-robotics/chapter-2-agent-integration',
                component: ComponentCreator('/docs/modules/ros2-robotics/chapter-2-agent-integration', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/ros2-robotics/chapter-3-urdf-humanoids',
                component: ComponentCreator('/docs/modules/ros2-robotics/chapter-3-urdf-humanoids', '192'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/vla-robotics/assets/autonomous-humanoid-concept',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/autonomous-humanoid-concept', '579'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/assets/llm-planning-concept',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/llm-planning-concept', '597'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/assets/llm-planning-diagram',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/llm-planning-diagram', 'd66'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/assets/vla-integration-diagram',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/vla-integration-diagram', 'db4'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/assets/whisper-concept',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/whisper-concept', '4ca'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/assets/whisper-diagram',
                component: ComponentCreator('/docs/modules/vla-robotics/assets/whisper-diagram', '485'),
                exact: true
              },
              {
                path: '/docs/modules/vla-robotics/chapter-1-whisper-voice-action',
                component: ComponentCreator('/docs/modules/vla-robotics/chapter-1-whisper-voice-action', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/vla-robotics/chapter-2-llm-cognitive-planning',
                component: ComponentCreator('/docs/modules/vla-robotics/chapter-2-llm-cognitive-planning', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/vla-robotics/chapter-3-autonomous-humanoid-capstone',
                component: ComponentCreator('/docs/modules/vla-robotics/chapter-3-autonomous-humanoid-capstone', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/vla-robotics/intro',
                component: ComponentCreator('/docs/modules/vla-robotics/intro', '466'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
