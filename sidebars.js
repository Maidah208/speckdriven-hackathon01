// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'ROS 2 Robotics Module',
      items: [
        'modules/ros2-robotics/index',
        'modules/ros2-robotics/chapter-1-ros2-basics',
        'modules/ros2-robotics/chapter-2-agent-integration',
        'modules/ros2-robotics/chapter-3-urdf-humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twin Module',
      items: [
        'modules/digital-twin/intro',
        'modules/digital-twin/chapter-1-gazebo-physics-simulation',
        'modules/digital-twin/chapter-2-unity-environment-design',
        'modules/digital-twin/chapter-3-sensor-simulation',
      ],
    },
    {
      type: 'category',
      label: 'AI-Robot Brain Module',
      items: [
        'modules/ai-robot-brain/intro',
        'modules/ai-robot-brain/chapter-1-isaac-sim',
        'modules/ai-robot-brain/chapter-2-isaac-ros-vslam',
        'modules/ai-robot-brain/chapter-3-nav2-path-planning',
      ],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action Module',
      items: [
        'modules/vla-robotics/intro',
        'modules/vla-robotics/chapter-1-whisper-voice-action',
        'modules/vla-robotics/chapter-2-llm-cognitive-planning',
        'modules/vla-robotics/chapter-3-autonomous-humanoid-capstone',
      ],
    },
  ],
};

module.exports = sidebars;
