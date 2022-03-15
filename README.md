# lotide


# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nicolecmaclean/lotide`

**Require it:**

`const _ = require('@nicolecmaclean/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

### Contents
* [Assert Equal](/assertEqual.js)                : Checks if two values are the same or not
* [Head](/head.js)                               : Returns value of first index of array
* [Tail](/tail.js)                               : Returns array after index 0.
* [Assert Equal Array](/eqArrays.js)             : Checks values of arrays match
* [Assert Equal Array ||](/assertArrayEqual.js)  : Checks if two arrays are the same or not
* [Without](/without.js)                         : Retunrs array minus given input value
* [Flatten](/flatten.js)                         : Returns array of values that do not contain any arrays, with an array input with array values
* [Middle](/middle.js)                           : Returns value of index in middle if an array - 1 value if array.length even, 2 if not.
* [Count Only](/countOnly.js)                    : Returns a count of a stated value
* [Count Letters](/countLetters.js)              : Returns a count of each letter in a string
* [Letter Positions](/letterPositions.js)        : Returns first index of stated letter
* [Find Key By Value](/findKeyByValue.js)        : Returns key of first value to match stated value
* [Equal Objects](/eqObjects.js)                 : Checks if two objects match
* [Assert Objects Equal](/assertObjectsEqual.js) : Checks if two objects return the same value or not
* [Map](/map.js)                                 : Returns array after callback function has been executed on each element of inputed array
* [Take Until](/takeUntil.js)                    : Returns array until input value is the value of the element
* [Find Key](/findKey.js)                        : Returns value of stated key
* [Index](/index.js)                             : File containing all requirments and exported functions in an object
