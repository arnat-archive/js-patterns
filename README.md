# JavaScript Patterns

## Requirements

- Dart

Mason CLI installation

```shell
dart pub global activate mason_cli
```

## How to install

```shell
# source <(curl -s https://raw.githubusercontent.com/arnat-technologies/js-patterns/main/setup.sh?$(date +%s))
curl -s https://raw.githubusercontent.com/arnat-technologies/js-patterns/main/setup.sh?$(date +%s) | bash
```

## How to use

```shell
# List all snippets
mason --list --global

# Run a specific snippet
mason make js-simple-factory
```

## Creational Design Patterns

### Simple Factory

Creational patterns are focused towards how to instantiate an object or group of related objects.

_Wikipedia says_

> In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

```shell
mason make js-pattern-simple-factory
```

### Factory Method

It provides a way to delegate the instantiation logic to child classes.

_Wikipedia says_

> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

```shell
mason make js-pattern-factory
```

### Abstract Factory

A factory of factories a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

_Wikipedia says_

> The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes

```shell
mason make js-pattern-abstract-factory
```

### Builder

Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

_Wikipedia says_

> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

```shell
mason make js-pattern-builder
```

### Prototype

Create object based on an existing object through cloning.

_Wikipedia says_

> The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

```shell
mason make js-pattern-prototype
```

### Singleton

Ensures that only one object of a particular class is ever created.

_Wikipedia says_

> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

```shell
mason make js-pattern-singleton
```

## Structural Design Patterns

### Adapter

Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

_Wikipedia says_

In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.

```shell
mason make js-pattern-adapter
```

### Bridge

Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

_Wikipedia says_

> The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently"

```shell
mason make js-pattern-bridge
```

### Composite

Composite pattern lets clients to treat the individual objects in a uniform manner.

_Wikipedia says_

In software engineering, the composite pattern is a partitioning design pattern. The composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

```shell
mason make js-pattern-composite
```

### Decorator

Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

_Wikipedia says_

> In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

```shell
mason make js-pattern-decorator
```

### Facade

Facade pattern provides a simplified interface to a complex subsystem

_Wikipedia says_

> A facade is an object that provides a simplified interface to a larger body of code, such as a class library.

```shell
mason make js-pattern-facade
```

### Flyweight

It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

_Wikipedia says_

> In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.

```shell
mason make js-pattern-flyweight
```

### Proxy

Using the proxy pattern, a class represents the functionality of another class.

_Wikipedia says_

> A proxy, in its most general form, is a class functioning as an interface to something else. A proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.

```shell
mason make js-pattern-proxy
```

## Behavioral Design Patterns

It is concerned with assignment of responsibilities between the objects. What makes them different from structural patterns is they don't just specify the structure but also outline the patterns for message passing/communication between them. Or in other words, they assist in answering "How to run a behavior in software component?"

_Wikipedia says_

> In software engineering, behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

### Chain of responsibility

It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.

_Wikipedia says_

> In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle the rest are passed to the next processing object in the chain.

```shell
mason make js-pattern-chain-of-responsibility
```

### Command

Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

_Wikipedia says_

> In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

```shell
mason make js-pattern-command
```

### Iterator

It presents a way to access the elements of an object without exposing the underlying presentation.

_Wikipedia says_

> In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.

```shell
mason make js-pattern-iterator
```

### Mediator

Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.

_Wikipedia says_

> In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.

```shell
mason make js-pattern-mediator
```

### Memento

Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.

_Wikipedia says_

> The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).

```shell
mason make js-pattern-memento
```

### Observer

Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.

_Wikipedia says_

> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

```shell
mason make js-pattern-observer
```

### Visitor

Visitor pattern let's you add further operations to objects without having to modify them.

_Wikipedia says_

> In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existing object structures without modifying those structures. It is one way to follow the open/closed principle.

```shell
mason make js-pattern-visitor
```

### Strategy

Strategy pattern allows you to switch the algorithm or strategy based upon the situation.

_Wikipedia says_

> In computer programming, the strategy pattern (also known as the policy pattern) is a behavioural software design pattern that enables an algorithm's behavior to be selected at runtime.

```shell
mason make js-pattern-strategy
```

### State

It lets you change the behavior of a class when the state changes.

_Wikipedia says_

> The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface

```shell
mason make js-pattern-state
```

### Template Method

Template method defines the skeleton of how certain algorithm could be performed but defers the implementation of those steps to the children classes.

_Wikipedia says_

> In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets one redefine certain steps of an algorithm without changing the algorithm's structure.

```shell
mason make js-pattern-template-method
```

## Todo

- [ ] Chain of Responsibility
- [ ] Command
- [ ] Iterator
- [ ] Mediator
- [ ] Memento
- [ ] Observer
- [ ] Visitor
- [ ] Strategy
- [ ] State
- [ ] Template Method
