---
sidebar_position: 2
---

# ROS 2 Basics: Nodes, Topics, and Services

## Learning Objectives

After completing this chapter, you will be able to:
- Explain the fundamental concepts of ROS 2
- Identify and describe the three core concepts: nodes, topics, and services
- Create a simple publisher and subscriber node
- Understand the difference between asynchronous and synchronous communication in ROS 2
- Run and debug basic ROS 2 examples

## Prerequisites

Before starting this chapter, you should have:
- Basic programming knowledge (especially Python)
- Fundamental understanding of robotics concepts (robot structure, sensors, actuators)
- Familiarity with command line operations

## Introduction to ROS 2

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It's a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

ROS 2 is the next generation of the Robot Operating System, addressing many of the limitations of the original ROS, particularly in the areas of:
- Real-time support
- Multi-robot systems
- Production deployment
- Security

## Core Concepts

### Nodes

A node is a process that performs computation. Nodes are the fundamental building blocks of ROS 2 programs. In a distributed system, a node written in one language can communicate with a node written in another language.

*Note: This diagram shows how nodes function as the fundamental building blocks of ROS 2 programs, with each node performing specific computations and communicating with other nodes.*

Nodes are designed to be modular, so individual nodes can be written separately and combined at runtime. This allows you to design robot software as a set of small, decoupled processes that work together.

### Topics and Messages

Topics are named buses over which nodes exchange messages. Topics are unidirectional: one or more nodes can publish to a topic, and one or more nodes can subscribe to a topic to receive messages.

*Note: This diagram illustrates the publisher-subscriber communication pattern, where one or more publishers send messages to a topic and one or more subscribers receive those messages.*

Messages are the data packets sent via topics between nodes. Messages can contain various data types like integers, floats, arrays, and custom message types. Each message has a specific structure defined in a `.msg` file.

### Services

Services provide a request/reply communication pattern. A service has a name, and clients can send requests to the service and receive replies. This is a synchronous communication method, unlike the asynchronous nature of topics.

*Note: This diagram shows the client-service request-reply pattern, where a client sends a request to a service and receives a reply.*

Services are useful for operations that have a clear input and output, like requesting sensor data or commanding a specific action.

## Practical Example: Creating a Simple Publisher and Subscriber

Let's create a simple example to demonstrate nodes, topics, and messages:

```python
# publisher_node.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello World: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

```python
# subscriber_node.py
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Running the Example

To run this example:

1. Make sure ROS 2 is installed and sourced
2. Create a new ROS 2 package: `ros2 pkg create --build-type ament_python my_publisher_subscriber`
3. Add the code above to the appropriate files
4. Run the publisher: `ros2 run my_publisher_subscriber publisher_node.py`
5. In another terminal, run the subscriber: `ros2 run my_publisher_subscriber subscriber_node.py`

You should see the publisher sending messages and the subscriber receiving them.

## Exercises

### Exercise 1: Modify the Publisher
Modify the publisher example to publish a counter that increments by 2 each time instead of 1.

### Exercise 2: Create a Custom Message
Create a custom message type that includes both a string and an integer, then modify the publisher and subscriber to use this new message type.

### Exercise 3: Add a Service
Extend the example by adding a service that resets the counter to 0 when called.

### Exercise 4: Multiple Subscribers
Run multiple subscriber nodes simultaneously and observe how they all receive the same published messages.

## Summary

In this chapter, you learned:
- What ROS 2 is and why it's important for robotics
- The core concepts of nodes, topics, and services
- How to create a simple publisher and subscriber
- The difference between asynchronous (topics) and synchronous (services) communication

## Additional Resources

For further learning and reference, consider these resources:

- [Official ROS 2 Documentation](https://docs.ros.org/en/rolling/)
- [ROS 2 Tutorials](https://docs.ros.org/en/rolling/Tutorials.html)
- [ROS 2 Design Articles](https://design.ros2.org/)
- [rclpy API Documentation](https://docs.ros.org/en/rolling/p/rclpy/)
- [ROS 2 Message Types](https://docs.ros.org/en/rolling/Concepts/About-ROS-Interfaces.html)

## Summary

In this chapter, you learned:
- What ROS 2 is and why it's important for robotics
- The core concepts of nodes, topics, and services
- How to create a simple publisher and subscriber
- The difference between asynchronous (topics) and synchronous (services) communication

This foundation will help you understand more advanced ROS 2 concepts in the following chapters.