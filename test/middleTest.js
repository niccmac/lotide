const assertArrayEqual = require(`../assertArraysEqual`);
const middle = require(`../middle`);
const assertEqual = require(`../assertEqual`);

assertEqual(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]),"Arrays do match.");
assertEqual(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]),"Arrays do match.");
assertEqual(assertArrayEqual(middle([1, 2]),[]),"Arrays do match.");

