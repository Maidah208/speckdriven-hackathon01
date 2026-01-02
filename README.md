# ROS 2 Nervous System

This is a Docusaurus-based educational book focused on ROS 2 fundamentals for humanoid robot control. The book is designed for robotics and AI students focusing on physical AI systems.

## About

This educational module covers:

1. **ROS 2 Basics**: Understanding nodes, topics, and services
2. **Agent Integration**: Bridging Python agents to ROS 2 controllers
3. **URDF for Humanoid Robots**: Understanding robot description format
4. **Digital Twin (Gazebo & Unity)**: Physics simulation and virtual environments for humanoid robots
5. **AI-Robot Brain (NVIDIA Isaac)**: Advanced perception, navigation, and training using NVIDIA Isaac ecosystem
6. **Vision-Language-Action (VLA)**: Advanced AI-driven perception, planning, and action for humanoid robots using voice interfaces and cognitive planning

## Features

- Modular content architecture for easy navigation
- Interactive educational content with practical examples
- Exercises and learning objectives for each chapter
- Visual aids and diagrams to explain concepts
- Comprehensive resources section for further learning

## Prerequisites

This module assumes you have:
- Basic programming knowledge (especially Python)
- Fundamental understanding of robotics concepts (robot structure, sensors, actuators)

## Installation

To run this book locally:

1. Make sure you have Node.js installed
2. Navigate to this directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The book will be available at http://localhost:3000

## Structure

- `docs/modules/ros2-robotics/` - Contains ROS 2 book chapters
- `docs/modules/digital-twin/` - Contains Digital Twin module chapters
- `docs/modules/ai-robot-brain/` - Contains AI-Robot Brain module chapters (NVIDIA Isaac)
- `docs/modules/vla-robotics/` - Contains Vision-Language-Action module chapters (Whisper, LLM, Nav2)
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation configuration
- `src/css/` - Custom styling
- `package.json` - Project dependencies

## Chapters

### ROS 2 Robotics Module
1. [ROS 2 Basics: Nodes, Topics, and Services](./docs/modules/ros2-robotics/chapter-1-ros2-basics.md)
2. [Bridging Python Agents to ROS 2 Controllers](./docs/modules/ros2-robotics/chapter-2-agent-integration.md)
3. [Understanding URDF for Humanoid Robots](./docs/modules/ros2-robotics/chapter-3-urdf-humanoids.md)

### Digital Twin Module
1. [Physics Simulation in Gazebo](./docs/modules/digital-twin/chapter-1-gazebo-physics-simulation.md)
2. [Unity Environment Design](./docs/modules/digital-twin/chapter-2-unity-environment-design.md)
3. [Sensor Simulation](./docs/modules/digital-twin/chapter-3-sensor-simulation.md)

### AI-Robot Brain Module
1. [Isaac Sim for Photorealistic Simulation](./docs/modules/ai-robot-brain/chapter-1-isaac-sim.md)
2. [Isaac ROS for Accelerated Perception and VSLAM](./docs/modules/ai-robot-brain/chapter-2-isaac-ros-vslam.md)
3. [Nav2 for Humanoid Path Planning](./docs/modules/ai-robot-brain/chapter-3-nav2-path-planning.md)

### Vision-Language-Action Module
1. [Voice-to-Action with OpenAI Whisper](./docs/modules/vla-robotics/chapter-1-whisper-voice-action.md)
2. [LLM-Based Cognitive Planning for ROS 2](./docs/modules/vla-robotics/chapter-2-llm-cognitive-planning.md)
3. [Capstone: Autonomous Humanoid System](./docs/modules/vla-robotics/chapter-3-autonomous-humanoid-capstone.md)