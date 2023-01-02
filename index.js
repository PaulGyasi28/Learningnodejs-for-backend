/*
const add = require('./add.js');

// hello world:nodejs
console.log('Hello from index.js')

const sum = add(1,2);
const sum1 = add(9,12);

console.log(sum);
console.log(sum1);
*/

/*
require('./batman');
require('./superman');
*/

const superHero = require('./superhero');
console.log(superHero.getName());
superHero.setName('supername');
console.log(superHero.getName());

