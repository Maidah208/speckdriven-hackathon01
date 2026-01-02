---
title: Chapter 3 - Nav2 for Humanoid Path Planning
sidebar_label: Chapter 3 - Nav2 Path Planning
---

# Chapter 3: Nav2 for Humanoid Path Planning

## Learning Objectives

After completing this chapter, you will be able to:
- Configure Nav2 for humanoid robot constraints and path planning
- Implement global and local path planning with Nav2
- Develop obstacle avoidance strategies for dynamic environments
- Integrate perception data with navigation systems for humanoid robots

## Introduction

Navigation is a fundamental capability for autonomous robots, and Nav2 (Navigation 2) is the standard navigation stack for ROS 2. While originally designed for wheeled robots, Nav2 can be adapted for humanoid robots with specific configuration adjustments to account for bipedal locomotion, balance constraints, and different kinematic properties. This chapter explores how to configure and use Nav2 for humanoid robot path planning, building on the perception knowledge gained in Chapter 2.

Humanoid robots present unique navigation challenges compared to wheeled platforms:
- **Balance constraints**: Must maintain center of mass within support polygon
- **Kinematic complexity**: Multi-degree-of-freedom legs with different motion capabilities
- **Footstep planning**: Requires careful footstep sequence planning for stable locomotion
- **Stability requirements**: Higher stability margins needed for safe navigation
- **Dynamic motion**: Walking gait affects obstacle detection and planning

Nav2 provides the flexibility to address these challenges through configurable planners, controllers, and behavior trees.

## Nav2 Fundamentals for Humanoid Robots

### Understanding Nav2 Architecture

Nav2 implements a behavior tree-based architecture that allows for complex navigation behaviors. The core components include:

1. **Global Planner**: Computes a path from start to goal considering static obstacles
2. **Local Planner**: Executes the path while avoiding dynamic obstacles in real-time
3. **Controller**: Converts planned paths into actuator commands for the robot
4. **Recovery Behaviors**: Handles situations where navigation gets stuck
5. **Costmaps**: Represents obstacles and navigation costs in the environment

### Humanoid-Specific Navigation Considerations

When configuring Nav2 for humanoid robots, several factors must be considered:

- **Footprint**: Humanoid robots have complex footprints that change with posture
- **Kinematic constraints**: Different turning radii and motion capabilities compared to wheeled robots
- **Stability margins**: Need for larger safety margins to maintain balance
- **Motion primitives**: Different set of possible motions compared to differential drive
- **Footstep planning**: May require integration with footstep planners

### Behavior Trees in Nav2

Nav2 uses behavior trees to orchestrate navigation behaviors. Key components include:
- **Action nodes**: Execute specific navigation tasks (planning, controlling, etc.)
- **Condition nodes**: Check conditions (am I near goal? am I stuck?)
- **Decorator nodes**: Modify behavior (retry, timeout, etc.)
- **Control nodes**: Organize execution flow (sequence, fallback, etc.)

## Configuring Nav2 for Humanoid Constraints

### Global Planner Configuration

For humanoid robots, the global planner needs to account for:
- Larger robot footprint to ensure stability margins
- Kinematically feasible paths that account for leg motion constraints
- Height considerations for overhead obstacles
- Surface traversability (stairs, slopes, different terrains)

Common global planners for humanoid robots:
- **NavFn**: Fast but simple pathfinding
- **GlobalPlanner**: More configurable with potential field approaches
- **Theta*:**: Any-angle pathfinding for more direct paths
- **Custom footstep planners**: For complex terrain navigation

### Local Planner Configuration

The local planner for humanoid robots must handle:
- Real-time obstacle avoidance while maintaining balance
- Integration with walking pattern generators
- Footstep adjustment for dynamic obstacles
- Recovery from balance disturbances

Popular local planners for humanoid robots:
- **DWB (Dynamic Window Approach)**: Good for reactive navigation
- **TB2 (Trajectory Rollout)**: More predictive planning
- **Custom controllers**: Specifically designed for humanoid walking

### Costmap Configuration

Costmaps for humanoid robots need special consideration for:
- **3D obstacles**: Overhead obstacles that wheeled robots wouldn't encounter
- **Traversability**: Different terrain types (stairs, slopes, uneven surfaces)
- **Stability zones**: Areas where the robot can safely stand and walk
- **Footstep feasibility**: Which areas allow for stable foot placement

## Global and Local Path Planning with Nav2

### Global Path Planning Strategies

For humanoid robots, global path planning involves:

1. **Topological planning**: High-level path through areas suitable for humanoid locomotion
2. **Geometric planning**: Detailed path considering robot dimensions and stability
3. **Footstep planning**: Converting geometric paths to sequences of foot placements
4. **Walking pattern generation**: Creating stable walking gaits for the path

### Local Path Planning Considerations

Local path planning for humanoid robots must:
- React quickly to dynamic obstacles while maintaining balance
- Adjust footstep plans in real-time
- Integrate with walking pattern generators
- Handle recovery from unexpected disturbances

### Humanoid-Specific Navigation Parameters

Key parameters to tune for humanoid robots:
- `footprint`: Accurate representation of robot's convex hull
- `robot_radius`: Conservative radius for collision checking
- `inflation_radius`: Extra buffer for stability margins
- `min_vel_x`, `max_vel_x`: Appropriate walking speeds
- `min_turning_radius`: Minimum turning capability
- `acc_lim_x`, `acc_lim_theta`: Acceleration limits for stable walking

## Obstacle Avoidance Strategies for Dynamic Environments

### Reactive Avoidance

Reactive obstacle avoidance adjusts the robot's path based on real-time sensor data:
- **Local minima**: Handling situations where obstacles trap the robot
- **Velocity obstacles**: Predicting future positions of moving obstacles
- **Social navigation**: Considering human presence and behavior in navigation

### Predictive Avoidance

Predictive approaches anticipate obstacle movements:
- **Kalman filters**: Tracking moving obstacles and predicting trajectories
- **Machine learning**: Learning obstacle behavior patterns
- **Multi-hypothesis tracking**: Considering multiple possible future states

### Humanoid-Specific Avoidance Techniques

Humanoid robots require special consideration for obstacle avoidance:
- **Balance-aware navigation**: Ensuring avoidance maneuvers don't compromise stability
- **Footstep replanning**: Adjusting planned footsteps when obstacles are detected
- **Gait adaptation**: Changing walking patterns based on obstacle types
- **Safe stopping**: Ensuring the robot can come to a stable stop if needed

## Practical Examples of Nav2 Integration with Perception Data

### Perception-Navigation Integration Pipeline

The integration between perception and navigation systems typically involves:

1. **Sensor fusion**: Combining data from cameras, LiDAR, IMU, etc.
2. **Environment representation**: Creating maps and costmaps from sensor data
3. **Obstacle detection**: Identifying static and dynamic obstacles
4. **Path planning**: Computing safe and efficient paths
5. **Execution monitoring**: Tracking progress and detecting issues

### Humanoid Robot Navigation Examples

Common navigation scenarios for humanoid robots:

- **Indoor navigation**: Hallways, doors, elevators, stairs
- **Crowd navigation**: Moving through groups of people
- **Dynamic environments**: Avoiding moving obstacles and changing conditions
- **Multi-floor navigation**: Using elevators and stairs
- **Terrain navigation**: Uneven surfaces, slopes, different materials

### Integration with Isaac ROS Perception

Connecting Nav2 with Isaac ROS perception data:
- **Obstacle detection**: Using Isaac ROS object detection for costmap updates
- **Semantic mapping**: Incorporating semantic information into navigation decisions
- **Dynamic object tracking**: Feeding tracked objects to Nav2's obstacle avoidance
- **Localization**: Using Isaac ROS VIO for precise robot positioning

## Hands-On Exercises

### Exercise 1: Nav2 Configuration for Humanoid Constraints

1. Set up a basic Nav2 configuration for a humanoid robot
2. Configure the robot's footprint and kinematic constraints
3. Adjust costmap parameters for humanoid-specific requirements
4. Test navigation in a simple environment
5. Validate that the robot maintains stability during navigation

### Exercise 2: Dynamic Obstacle Avoidance

1. Implement dynamic obstacle detection using Isaac ROS perception
2. Configure Nav2 to react to moving obstacles
3. Test navigation with people or objects moving in the environment
4. Evaluate the robot's ability to maintain safe distances
5. Analyze the balance between navigation efficiency and safety

### Exercise 3: Multi-Modal Navigation

1. Configure Nav2 for different terrain types (flat ground, stairs, slopes)
2. Integrate footstep planning with global navigation
3. Test navigation through challenging environments
4. Evaluate path optimality and safety margins
5. Document the performance in different scenarios

## Troubleshooting Common Nav2 Issues

### Navigation Failures

- **Issue**: Robot gets stuck in local minima
- **Solution**: Adjust costmap inflation, tune planner parameters, or add recovery behaviors

- **Issue**: Robot oscillates between goals
- **Solution**: Check controller parameters, adjust velocity limits, verify TF tree

- **Issue**: Paths are too conservative or too aggressive
- **Solution**: Tune inflation radius, adjust footprint, recalibrate sensors

### Humanoid-Specific Issues

- **Issue**: Balance loss during navigation
- **Solution**: Increase stability margins, adjust walking parameters, add balance recovery

- **Issue**: Footstep planning conflicts with Nav2 paths
- **Solution**: Integrate footstep planner with Nav2, adjust path smoothing

- **Issue**: Slow navigation due to excessive safety checks
- **Solution**: Balance safety parameters with efficiency, tune obstacle detection thresholds

### Integration Problems

- **Issue**: Perception and navigation systems disagree on obstacles
- **Solution**: Verify coordinate frames, check sensor calibration, synchronize timestamps

- **Issue**: High computational load affecting real-time performance
- **Solution**: Optimize costmap update rates, reduce map resolution where appropriate

## Summary

This chapter covered Nav2 configuration and usage for humanoid robot path planning. You learned about the unique challenges of humanoid navigation, how to configure Nav2 for humanoid constraints, and how to integrate perception data with navigation systems. The practical examples and exercises provided hands-on experience with real navigation scenarios that humanoid robots encounter.

## Assessment Questions

1. What are the key differences between Nav2 configuration for wheeled robots versus humanoid robots?
2. How do humanoid robot kinematic constraints affect path planning and execution?
3. What are the main challenges in integrating perception data with navigation for humanoid robots?
4. Explain the role of behavior trees in Nav2 and how they benefit humanoid navigation.
5. What safety considerations are unique to humanoid robot navigation compared to other platforms?

## Next Steps

After completing this module, you now have a comprehensive understanding of the AI-Robot Brain components:
1. Isaac Sim for photorealistic simulation and synthetic data generation
2. Isaac ROS for accelerated perception and VSLAM
3. Nav2 for humanoid path planning with perception integration

You're now prepared to implement complete AI-robot brain systems that combine simulation, perception, and navigation for advanced humanoid robotics applications.

## Visual Aids and Diagrams

![Nav2 Humanoid Navigation Architecture](./assets/nav2-diagram.md)

*Diagram showing the integration between Nav2 navigation stack, humanoid-specific constraints, and perception systems.*

## Additional Resources

- [ROS 2 Navigation (Nav2) Documentation](https://navigation.ros.org/)
- [Nav2 for Humanoid Robots Research Papers](https://arxiv.org/search/?query=nav2+humanoid)
- [Humanoid Robot Navigation Tutorials](https://humanoid-navigation-tutorials.org/)