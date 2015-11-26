require("babel-polyfill");
// using Generators to simpify iteration definition
var fibonacciGenerator = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}
console.log("\n// using Generators to simpify iteration definition");
for (var n of fibonacciGenerator) {
  if (n > 10)
    break;
  console.log(n);
}