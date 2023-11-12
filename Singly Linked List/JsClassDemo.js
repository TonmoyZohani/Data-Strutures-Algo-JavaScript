class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's information
  getInformation() {
    return `${this.name} is ${this.age} years old.`;
  }

  // Method to increase the person's age
  celebrateBirthday() {
    this.age++;
    console.log(
      `Happy Birthday, ${this.name}! You are now ${this.age} years old.`
    );
  }
}

const person1 = new Person("John", 25);

console.log(person1.name);
console.log(person1.getInformation()); // Output: John is 25 years old.
person1.celebrateBirthday();
