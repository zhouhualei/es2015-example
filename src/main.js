require('./polyfill_support.js')

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


console.log("\n// enhance object literal");
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


console.log("\n// enhance string");
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


console.log("\n// enhance arguments");
// bind parameters to array
function f1(x, ...y) {
  return x * y.length;
}
console.log(f1(3, "hello", true));

function f2(x, y, z) {
  return x + y + z;
}
console.log(f2(...[1,2,3]));



console.log("\n// let: mutable, can only be declared once in its block");
console.log("// const -> immutable, can only be assigned once in its block");
function varible() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      //x = "foo";
      console.log(x);
    }
    // okay, declared with `let`
    x = "bar";
    // error, already declared in block
    //let x = "inner";
    console.log(x);
  }
}
varible();


console.log("\n// Iteration and lazy evaluation");
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}
console.log("before iterating it:", fibonacci);
for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 10)
    break;
  console.log(n);
}


console.log("\n// Full Unicode support");
// same as ES5.1
console.log("𠮷".length == 2);

// new RegExp behaviour, opt-in ‘u’
console.log("𠮷".match(/./u)[0]);

// new form
console.log("𠮷" == "\u{20BB7}");
console.log("𠮷" == "\uD842\uDFB7");

// new String ops
console.log("𠮷".codePointAt(0) == 0x20BB7);

// for-of iterates code points
for(var c of "𠮷") {
  console.log(c);
}



console.log("\n// Module");





















