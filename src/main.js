console.log("// Arrow");
var sArray = ["1", "2", "3", "4"];
var nArray = sArray.map(i => Number.parseInt(i));
console.log(nArray);

console.log("\n// Block");
var fives = [];
nArray.forEach(v => {
  if (v % 2 === 0)
    fives.push(v);
});
console.log(fives);

console.log("\n// this");
var bob = {
  _name: "Warren",
  _friends: ["Allen", "Bob"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
bob.printFriends();

console.log("\n// class");
class Person {
  constructor(name){
    this.name = name;
  }
  
  say() {
    console.log("I'm a person, my name is " + this.name);
  }
}

class Employee extends Person {
  constructor(name, company) {
    super(name);
    this.company = company;
  };
  
  say() {
    console.log("I'm an employee, my name is " + this.name + ", I work at " + this.company);
  }
}

var person = new Person("person-1");
var employee = new Employee("emp-1", "DP");
person.say();
employee.say();

