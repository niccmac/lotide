const assertEqual = require("../assertEqual");
const assertArraysEqual = require(`../assertArraysEqual`);

assertEqual(assertArraysEqual([1,2,3],[1,2,3]), "Arrays do match.");
assertEqual(assertArraysEqual([1,2,3],[1,2]), "Arrays do not match.");
assertEqual(assertArraysEqual([1,2,3],[1,2,4]), "Arrays do not match.");
