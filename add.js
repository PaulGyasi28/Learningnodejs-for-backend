/*
Module is a reusable chunk of code that has it's own context.
1.Local modules:modules we create in our application.
2.Built-in modules:modules that nodejs ships outta the box
3.Third-party modules:modules written by other developers that we can use.
*/

//add function
const add = (a,b) => {
    return a+b;
}

//we can use module.exports to export the function.
module.exports = add;

/*
const sum = add(9,10);

console.log(sum);
*/


