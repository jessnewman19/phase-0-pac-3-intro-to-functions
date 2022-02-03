// Follow along with the examples here
// function doNothing() {}
// function sayHello () {
//     console.log("Hello!")
// }
// sayHello();
// function sayHelloToGuadalupe() {
//     console.log("Hello, Guadalupe!")
// }; 
// sayHelloToGuadalupe(); 
// function sayHelloToLiz () {
//     console.log("Hello, Liz")
// }; 
// sayHelloToLiz(); 
// function sayHelloToSaimp() {
//     console.log("Hello, Saimp!")
// }; 
// sayHelloToSaimp();

// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
// }; 
// sayHelloTo("Guadalupe"); 
// sayHelloTo("Jane"); 
// sayHelloTo("R2-D2"); 
// sayHelloTo(1); 

// function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
// }; 
// say ("Goodbye", "Julio"); 

// function say (greeting, firstName) { 
//     console.log ("firstName: ", firstName); 
//     console.log ("greeting: ", firstName); 
//     console.log(`${greeting}, ${firstName}!`);
// }; 
// say ("Julio", "hello"); 

// function add(x, y) { 
//     return x + y;
// }
// console.log(add(80,9000));

// function say(greeting, firstName) { 
//     return `${greeting}, ${firstName}!`;
// }

// console.log(say("Hello", "Liz"));

function say(greeting, firstName) { 
    console.log("I was called");
    return `${greeting}, ${firstName}!`; 
}

console.log(say("Howdy", "partner"));
