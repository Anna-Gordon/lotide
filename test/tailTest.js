
const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ['thing 1', 'thing 2', 'thing 3']
assertEqual(tail(words).length, 3);