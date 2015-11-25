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
  }
  
  say() {
    console.log("I'm an employee, my name is " + this.name + ", I work at " + this.company);
  }
}

var person = new Person("person-1");
var employee = new Employee("emp-1", "DP");
person.say();
employee.say();


console.log("\n// object literal");
var someone = {
  toString() {
    return "super: " + super.toString();
  },

  // dynamic property names
  ["prop_" + (i => i*2)(1)] : 1,
  ["prop_" + (i => i*2)(2)] : 2,
  ["prop_" + (i => i*2)(3)] : 3

};
console.log(someone);
console.log(someone.toString());


console.log("\n// String");
console.log("This is a pretty little basic string.");
console.log('This is a pretty little basic string.');
console.log(`This is a pretty little template string.`);

// binding variable
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// Unescaped template strings
console.log(String.raw`In ES5 "\n" is a line-feed.`);


console.log("\n// Destructuring");
// list matching
var [a, ,b] = [1,2,3];
console.log("a=" + a + ", b=" + b);

// object matching
var {name, age, sex} = {name:"Warren", age:27, sex:"Male"};
console.log("name=" + name + ", age=" + age + ", sex=" + sex);
function g({name: x}) {
  console.log("x in parameter: " + x);
}
g({name: 5});

// fail to match
var [a] = [];
console.log("a=" + a);
var [a = 1] = [];  // with default value
console.log("a=" + a);






























