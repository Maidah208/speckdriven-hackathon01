---
sidebar_position: 3
---

# Bridging Python Agents to ROS 2 Controllers

## Learning Objectives

After completing this chapter, you will be able to:
- Understand the relationship between AI agents and ROS 2 controllers
- Implement Python agents that communicate with ROS 2 controllers
- Use rclpy to bridge AI logic with robot control systems
- Design agent-controller interaction patterns
- Debug agent-robot communication issues

## Prerequisites

Before starting this chapter, you should have:
- Basic knowledge of ROS 2 concepts (covered in Chapter 1)
- Python programming experience
- Understanding of basic AI/ML concepts
- Familiarity with robot control systems

## Introduction to Agent-Controller Integration

Modern robotics increasingly involves the integration of AI agents with robot control systems. An AI agent is a system that perceives its environment and takes actions to achieve goals. In robotics, these agents often need to interact with ROS 2 controllers to execute physical actions.

*Note: This diagram shows how AI agents connect to ROS 2 controllers, bridging the gap between AI algorithms and physical robot control.*

This chapter covers how to bridge Python-based AI agents to ROS 2 controllers, enabling them to control robotic systems programmatically. This connection bridges the gap between AI algorithms and physical robot control.

## Using rclpy for Agent Integration

rclpy is the Python client library for ROS 2. It allows Python programs to interact with ROS 2, making it ideal for connecting AI agents to robot controllers.

*Note: This diagram illustrates how Python agents use rclpy to connect and communicate with ROS 2 systems.*

### Basic rclpy Setup

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class AgentBridge(Node):
    def __init__(self):
        super().__init__('agent_bridge')
        self.publisher = self.create_publisher(String, 'agent_commands', 10)
        self.subscription = self.create_subscription(
            String,
            'robot_feedback',
            self.feedback_callback,
            10
        )

    def feedback_callback(self, msg):
        self.get_logger().info(f'Received feedback: {msg.data}')

    def send_command(self, command):
        msg = String()
        msg.data = command
        self.publisher.publish(msg)
        self.get_logger().info(f'Sent command: {command}')
```

### Agent Decision Loop

```python
class SimpleAgent(Node):
    def __init__(self):
        super().__init__('simple_agent')
        self.publisher = self.create_publisher(String, 'robot_commands', 10)
        self.feedback_sub = self.create_subscription(
            String,
            'sensor_data',
            self.sensor_callback,
            10
        )

        # Agent state
        self.current_state = 'IDLE'
        self.target_location = None

        # Timer for decision making
        self.timer = self.create_timer(0.1, self.decision_callback)

    def sensor_callback(self, msg):
        # Process sensor data and update internal state
        self.get_logger().info(f'Received sensor data: {msg.data}')

    def decision_callback(self):
        # Simple decision logic
        if self.current_state == 'IDLE':
            command = self.make_decision()
            self.send_command(command)

    def make_decision(self):
        # Simple decision logic based on internal state
        if self.target_location:
            return f'move_to {self.target_location}'
        else:
            return 'idle'

    def send_command(self, command):
        msg = String()
        msg.data = command
        self.publisher.publish(msg)
        self.get_logger().info(f'Agent sent: {command}')
```

## Advanced Agent Integration Patterns

*Note: This diagram shows various advanced integration patterns for connecting agents to ROS 2 controllers.*

### State Machine Agent

```python
from enum import Enum

class AgentState(Enum):
    IDLE = 1
    NAVIGATING = 2
    MANIPULATING = 3
    ERROR = 4

class StateMachineAgent(Node):
    def __init__(self):
        super().__init__('state_machine_agent')
        self.current_state = AgentState.IDLE
        self.state_functions = {
            AgentState.IDLE: self.state_idle,
            AgentState.NAVIGATING: self.state_navigating,
            AgentState.MANIPULATING: self.state_manipulating,
            AgentState.ERROR: self.state_error
        }

        # Publishers and subscribers
        self.cmd_pub = self.create_publisher(String, 'robot_commands', 10)
        self.feedback_sub = self.create_subscription(String, 'feedback', self.feedback_callback, 10)

        # Decision timer
        self.timer = self.create_timer(0.1, self.decision_loop)

    def decision_loop(self):
        if self.current_state in self.state_functions:
            self.state_functions[self.current_state]()

    def state_idle(self):
        # Handle idle state
        pass

    def state_navigating(self):
        # Handle navigation state
        pass

    def state_manipulating(self):
        # Handle manipulation state
        pass

    def state_error(self):
        # Handle error state
        pass

    def feedback_callback(self, msg):
        # Process feedback and potentially change state
        pass
```

## Practical Example: Simple Navigation Agent

Let's implement a complete example of an AI agent that navigates to specified locations:

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PoseStamped
from nav_msgs.msg import Odometry
import math

class NavigationAgent(Node):
    def __init__(self):
        super().__init__('navigation_agent')

        # Publishers and subscribers
        self.goal_pub = self.create_publisher(PoseStamped, 'goal_pose', 10)
        self.odom_sub = self.create_subscription(Odometry, 'odom', self.odom_callback, 10)

        # Agent parameters
        self.current_pose = None
        self.target_pose = None
        self.distance_threshold = 0.5  # meters

        # Timer for navigation decisions
        self.nav_timer = self.create_timer(0.5, self.navigation_callback)

    def odom_callback(self, msg):
        self.current_pose = msg.pose.pose

    def set_target(self, x, y, z=0.0):
        """Set navigation target"""
        self.target_pose = (x, y, z)
        self.get_logger().info(f'Set target to ({x}, {y})')

    def navigation_callback(self):
        if self.target_pose and self.current_pose:
            target_x, target_y, target_z = self.target_pose
            current_x = self.current_pose.position.x
            current_y = self.current_pose.position.y

            distance = math.sqrt((target_x - current_x)**2 + (target_y - current_y)**2)

            if distance > self.distance_threshold:
                # Send navigation command
                goal_msg = PoseStamped()
                goal_msg.header.stamp = self.get_clock().now().to_msg()
                goal_msg.header.frame_id = 'map'
                goal_msg.pose.position.x = target_x
                goal_msg.pose.position.y = target_y
                goal_msg.pose.position.z = target_z

                self.goal_pub.publish(goal_msg)
                self.get_logger().info(f'Navigating to ({target_x}, {target_y}), distance: {distance:.2f}')
            else:
                self.get_logger().info('Reached target location!')
```

## Exercises

### Exercise 1: Implement a Simple Agent
Create a basic agent that listens to sensor data and sends different commands based on the sensor values.

### Exercise 2: State Machine Agent
Extend the state machine example to include more states and transitions based on sensor feedback.

### Exercise 3: Navigation Agent Enhancement
Add obstacle avoidance to the navigation agent using simulated laser scan data.

### Exercise 4: Multi-Agent Coordination
Design a system where multiple agents coordinate to achieve a common goal.

## Additional Resources

- [rclpy API Documentation](https://docs.ros.org/en/rolling/p/rclpy/)
- [ROS 2 Client Libraries](https://docs.ros.org/en/rolling/Concepts/About-Client-Libraries.html)
- [Python Robotics Library](https://pypi.org/project/python-robotics/)
- [ROS 2 Navigation](https://navigation.ros.org/)

## Summary

In this chapter, you learned:
- How to bridge Python AI agents to ROS 2 controllers
- The use of rclpy for agent-controller communication
- Advanced integration patterns like state machines
- Practical examples of navigation agents
- How to implement decision-making loops in agents

This knowledge enables you to create AI agents that can control robots through ROS 2, bridging the gap between AI algorithms and physical robot systems.