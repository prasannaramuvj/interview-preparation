// Your code here
function createCounter() {
  // Write your solution
  let count = 0;

  return {
    increment:function() { return ++count},
    decrement:function() { return --count},
    reset:function() { return count=0},



  }
}

// Test it:
const counter1 = createCounter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.decrement()); // 1

const counter2 = createCounter();
console.log(counter2.increment()); // 1 (independent from counter1)
console.log(counter1.reset());     // 0