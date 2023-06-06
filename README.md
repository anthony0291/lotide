# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anthonytran0291/lotide`

**Require it:**

`const _ = require('@anthonytran0291/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  * `head`: Receives an array and returns an array of the first index.
  * `tail`: Receives an array and returns the full array minus the first index.
  * `middle`: Receives an array and returns middle one or two elements of an array.
  * `assertEqual`: Asserts whether two values are equal.
  * `assertArraysEqual`: Asserts whether two arrays are equal.
  * `assertObjectsEqual`: Asserts whether two objects are equal.
  * `countLetters`: Returns value amount of most frequently occuring letter.
  * `countOnly`: Given an array and an object, will return an object containing counts of everything that the input object has listed.
  * `eqArrays`: Receives two arrays and returns `true` if they match.
  * `eqObjects`: Receives two objects and returns `true` if they match.
  * `findKey`: Return specified key from an object.
  * `findKeyByValue`: Receives an object and a value, scan's the object and returns the first key which contains that value.
  * `letterPositions`: Returns all the indices in the string where each character was found.
  * `map`: Will return a new array based on the results of the callback function.
  * `takeUntil`: Returns a slice of an array taken from the beginning.
  * `without`: Will return a subset of a given array, while filtering unwanted elements.  