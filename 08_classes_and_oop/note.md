# Part of  OOP
Object literal

- Constructor function
- Prototype
- Classes
- Instance (new, this)


## 4 pillars

1. Abstraction
-------------------------------
Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object. It helps in reducing programming complexity and effort.

code
----------------------
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log('Engine started');
  }

  drive() {
    console.log('Driving the car');
  }
}

// Usage
const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine(); // Output: Engine started
myCar.drive();       // Output: Driving the car

----------------------------------------------------
Here, the complex logic behind starting the engine and driving is hidden. The user interacts with a simple interface (startEngine and drive methods) without knowing the internal implementation.

==> For example, you can execute the Math object methods in JavaScript by accessing the method using its name but can't see how it is implemented. Same way array methods like push(), pop(), etc., can be executed, but you don't know how it is implemented internally.


02. Encapsulation
Encapsulation is the bundling of data (variables) and methods (functions) that operate on the data into a single unit, i.e., a class. It also restricts direct access to some of the object’s components, which is a means of preventing accidental interference and misuse of the data.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age; // Encapsulated property
  }

  // Getter for name
  getName() {
    return this._name;
  }

  // Setter for name
  setName(newName) {
    this._name = newName;
  }

  // Getter for age
  getAge() {
    return this._age;
  }

  // Setter for age
  setAge(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log('Age must be positive');
    }
  }
}

// Usage
const person = new Person('John', 30);
console.log(person.getName()); // Output: John
person.setAge(-5); // Output: Age must be positive
person.setAge(31);
console.log(person.getAge()); // Output: 31

Here, name and age are encapsulated within the Person class, and direct access is controlled via getter and setter methods.




3. Inheritance
Inheritance is the mechanism by which one class can inherit properties and methods from another class. This allows for code reuse and the creation of a hierarchical relationship between classes.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Usage
const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.


In this example, the Dog class inherits from the Animal class. The Dog class can use the properties of Animal (like name) and override the speak method.

4. Polymorphism
Polymorphism allows objects to be treated as instances of their parent class. The same method can behave differently based on the object it is called on.

class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

// Usage
const animals = [new Animal(), new Dog(), new Cat()];



animals.forEach(animal => {
  animal.speak();
});
// Output:
// The animal makes a sound.
// The dog barks.
// The cat meows.


Here, the speak method is polymorphic—it behaves differently depending on whether the object is an instance of Animal, Dog, or Cat.


================================================================================
Summary:
Abstraction hides the complex details and exposes only the necessary parts.
Encapsulation bundles data and methods into a single unit and restricts access to certain components.
Inheritance allows a class to inherit properties and methods from another class.
Polymorphism enables methods to do different things based on the object it is acting upon




