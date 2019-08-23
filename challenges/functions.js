// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a,b,cb){
  return cb(a,b)
}




/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a,b){
  return a + b;
};
function multiply(a,b){
  return a * b;
};
function greeting(a,b){
  return `Hello ${a} ${b}, nice to meet you! `;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:  nestedFunction can access the variable internal because closure states that 
// functions can reach outside of their block scope but cannot read further into it. 
// When you run Javascript it will scan from the top down and as it's scanning it will read
// internal first and then read nested and see that internal is already defined. But if we
// were to create a function 'nestedfunction2' and try to refrence it in 'nestedfunction' the 
// the code would bring an error as soon as it read 'nestedfunction2' in 'nestedfunction' because
// it is not yet defined and it doesn't know what to do. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
