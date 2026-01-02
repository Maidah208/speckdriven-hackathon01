---
sidebar_position: 4
---

# Understanding URDF for Humanoid Robots

## Learning Objectives

After completing this chapter, you will be able to:
- Explain the structure and purpose of URDF files
- Read and interpret URDF files for humanoid robots
- Identify joint types, link connections, and kinematic properties
- Understand the relationship between URDF and robot kinematics
- Create basic URDF files for simple robot models
- Use URDF with ROS 2 for robot simulation and visualization

## Prerequisites

Before starting this chapter, you should have:
- Basic knowledge of ROS 2 concepts (covered in Chapter 1)
- Understanding of robot kinematics fundamentals
- Familiarity with XML file structure
- Basic understanding of 3D geometry and coordinate systems

## Introduction to URDF

*Note: This diagram shows the basic structure of a URDF file with links representing rigid bodies and joints defining connections between them.*

URDF (Unified Robot Description Format) is an XML-based format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including its links, joints, and other components. URDF is essential for robot simulation, visualization, and kinematic analysis.

For humanoid robots, URDF files describe the complex structure with multiple degrees of freedom, enabling accurate simulation and control of human-like robots.

## URDF Structure

A URDF file consists of several key elements:

### Robot Element

The root element of a URDF file is the `<robot>` tag, which contains the name of the robot:

```xml
<robot name="my_humanoid_robot">
  <!-- Robot components go here -->
</robot>
```

### Links

Links represent rigid bodies in the robot. Each link has visual and collision properties:

```xml
<link name="base_link">
  <visual>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
    <material name="blue">
      <color rgba="0 0 .8 1"/>
    </material>
  </visual>
  <collision>
    <geometry>
      <cylinder length="0.6" radius="0.2"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="10"/>
    <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
  </inertial>
</link>
```

### Joints

Joints define the connections between links and specify the type of motion allowed:

```xml
<joint name="base_to_upper_leg" type="revolute">
  <parent link="base_link"/>
  <child link="upper_leg"/>
  <origin xyz="0 0 0.3" rpy="0 0 0"/>
  <axis xyz="1 0 0"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
</joint>
```

Joint types include:
- `revolute`: Rotational joint with limited range
- `continuous`: Rotational joint without limits
- `prismatic`: Linear sliding joint
- `fixed`: No movement between links
- `floating`: 6-DOF movement
- `planar`: Movement on a plane

## URDF for Humanoid Robots

Humanoid robots have a complex structure with multiple limbs and joints. A typical humanoid URDF includes:

### Body Structure
- Torso/base link
- Head
- Left and right arms with shoulders, elbows, wrists
- Left and right legs with hips, knees, ankles
- Hands and feet

### Example Humanoid URDF Structure

```xml
<robot name="simple_humanoid">
  <!-- Torso -->
  <link name="torso">
    <visual>
      <geometry>
        <box size="0.3 0.2 0.5"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.2 0.5"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="5"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Head -->
  <joint name="neck_joint" type="revolute">
    <parent link="torso"/>
    <child link="head"/>
    <origin xyz="0 0 0.3" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-0.5" upper="0.5" effort="10" velocity="1"/>
  </joint>

  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
    </inertial>
  </link>

  <!-- Left Arm -->
  <joint name="left_shoulder_joint" type="revolute">
    <parent link="torso"/>
    <child link="left_upper_arm"/>
    <origin xyz="0.15 0 0.1" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="20" velocity="1"/>
  </joint>

  <link name="left_upper_arm">
    <visual>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
      <origin rpy="1.57 0 0"/>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
      <origin rpy="1.57 0 0"/>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
    </inertial>
  </link>

  <!-- More joints and links would continue... -->
</robot>
```

## Visualizing URDF in ROS 2

To visualize a URDF file in ROS 2:

1. Create a launch file to start the robot state publisher:

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch_ros.substitutions import FindPackageShare

def generate_launch_description():
    pkg_share = FindPackageShare(package='my_robot_description').find('my_robot_description')
    default_model_path = pkg_share + '/urdf/my_robot.urdf'

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )

    joint_state_publisher_node = Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher'
    )

    return LaunchDescription([
        DeclareLaunchArgument(name='model', default_value=default_model_path,
                            description='Absolute path to robot urdf file'),
        joint_state_publisher_node,
        robot_state_publisher_node
    ])
```

2. Launch the visualization:
```bash
ros2 launch my_robot_description display.launch.py
```

3. In another terminal, launch RViz2:
```bash
rviz2
```

## Working with Xacro

Xacro (XML Macros) is a preprocessor that adds macros to URDF, making it easier to write and maintain complex robot descriptions:

```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" name="humanoid_with_xacro">

  <!-- Define properties -->
  <xacro:property name="M_PI" value="3.1415926535897931" />
  <xacro:property name="base_width" value="0.3" />
  <xacro:property name="base_length" value="0.5" />
  <xacro:property name="base_height" value="0.2" />

  <!-- Macro for creating a wheel -->
  <xacro:macro name="wheel" params="prefix parent xyz">
    <joint name="${prefix}_wheel_joint" type="continuous">
      <parent link="${parent}"/>
      <child link="${prefix}_wheel"/>
      <origin xyz="${xyz}" rpy="${-M_PI/2} 0 0"/>
      <axis xyz="0 0 1"/>
    </joint>

    <link name="${prefix}_wheel">
      <visual>
        <geometry>
          <cylinder radius="0.05" length="0.02"/>
        </geometry>
      </visual>
      <collision>
        <geometry>
          <cylinder radius="0.05" length="0.02"/>
        </geometry>
      </collision>
      <inertial>
        <mass value="0.1"/>
        <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001"/>
      </inertial>
    </link>
  </xacro:macro>

  <!-- Use the macro -->
  <xacro:wheel prefix="front_left" parent="base_link" xyz="0.1 0.1 0"/>
  <xacro:wheel prefix="front_right" parent="base_link" xyz="0.1 -0.1 0"/>

</robot>
```

## URDF and Kinematics

*Note: This diagram illustrates how joints in a URDF file form kinematic chains, with each joint adding degrees of freedom to the system.*

URDF files define the kinematic structure of a robot, which is essential for:
- Forward kinematics (calculating end-effector position from joint angles)
- Inverse kinematics (calculating joint angles for desired end-effector position)
- Robot simulation and control

The kinematic chain is determined by the joint connections in the URDF, with each joint adding degrees of freedom to the system.

## Exercises

### Exercise 1: URDF Analysis
Analyze a provided URDF file for a simple robot and identify all links, joints, and their types.

### Exercise 2: Create a Simple URDF
Create a URDF file for a simple 2-link robot arm with revolute joints.

### Exercise 3: Humanoid Limb
Create a URDF file for a single humanoid leg with hip, knee, and ankle joints.

### Exercise 4: Xacro Conversion
Convert a simple URDF file to use Xacro macros for better maintainability.

## Additional Resources

- [URDF Documentation](http://wiki.ros.org/urdf)
- [Xacro Documentation](http://wiki.ros.org/xacro)
- [Robot State Publisher](http://wiki.ros.org/robot_state_publisher)
- [ROS 2 URDF Tutorials](https://docs.ros.org/en/rolling/Tutorials/URDF/Working-with-URDF.html)
- [URDF Specification](http://wiki.ros.org/urdf/XML)

## Summary

In this chapter, you learned:
- The structure and purpose of URDF files
- How to read and interpret URDF files for humanoid robots
- The different elements of URDF: links, joints, and their properties
- How to work with complex humanoid robot structures in URDF
- The use of Xacro to simplify complex URDF files
- How to visualize URDF files in ROS 2

This knowledge enables you to understand and work with robot description files, which are essential for robot simulation, visualization, and kinematic analysis in ROS 2.