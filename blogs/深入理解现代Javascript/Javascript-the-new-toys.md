## Chapter 5: New Object Features

### Computed Property Names

- Symbol

### Shorthand Property

- Threed dots

### Getting and Setting an Object's Prototype

- `Object.setPrototypeOf`
- `Object.getPrototypeOf`
- The `__proto__` Property on Browsers
- The `__proto__` Literal Property Name on Browsers

### Method Syntax, and super Outside Classes

### Symbols

### New Object Functions

- `Object.assing`
- `Object.is`
- `Object.values`
- `Object.entries`
- `Object.fromEntries`
  - The `Object.fromEntries()` static method transforms a list of key-value pairs into an object.
- `Object.getOwnPropertySymbols`
  - The Object.getOwnPropertySymbols() static method returns an array of all symbol properties found directly upon a given object.
- `Object.getOwnPropertyDescriptors`
  - The `Object.getOwnPropertyDescriptors()` static method returns all own property descriptors of a given object.

### Old Habits to New

- Use Computed Syntax When Creating Properties with Dynamic Names
- Use Shorthand Syntax When Initializing a Property from a Variable with the Same Name
- Use Object.assign instead of Custom “Extend” Functions or Copying All Properties Explicitly
- Use Spread Syntax When Creating a New Object Based on an Existing Object’s Properties
- Use `Symbol` to Avoid Name Collision
- Use `Object.getPrototypeOf/setPrototypeOf` Instead of `__proto__`
- Use Method Syntax for Methods

## Chapter 6: ITERABLES, ITERATORS, FOR-OF, ITERABLE SPREAD, GENERATORS

### Iterators, Iterables, the for-of Loop, and Iterable Spread Syntax

- Iterators and Iterables
- The for-of Loop: Using an Iterator Implicitly
- Using an Iterator Explicitly
- Stopping Iteration Early
- Iterator Prototype Objects
- Making Something Iterable
- Iterable Iterators
- Iterable Spread Syntax
- Iterators, for-of, and the DOM

### Generator Functions

- A Basic Generator Function Just Producing Values
- Using Generator Functions to Create Iterators
- Generator Functions As Methods
- Using a Generator Direct
- Consuming Values with Generators
- Using return in a Generator Function
- Precedence of the yield Operator
- The return and throw Methods: Terminating a Generator
- Yielding a Generator or Iterable: yield\*

### Old Habits to New

- Use Constructs That Consume Iterables
- Use DOM Collection Iteration Features
- Use the Iterable and Iterator Interfaces
- Use Iterable Spread Syntax in Most Places You Used to Use Function.prototype.apply
- Use Generators

## CHAPTER 7: DESTRUCTURING

### Overview

### Basic Object Destructuring

### Basic Array (and Iterable) Destructuring

### Defaults

### Rest Syntax in Destructing Patterns

### Using Different Names

### Computed Property Names

### Nested Destructuring

### Destructuring in Loops

### Old Habits to New

- Use Destructuring When Getting Only Some Properties from an Object
- Use Destructuring for Options Objects

## CHAPTER 8: PROMISES

### Why Promises?

### Promise Fundamentals

- Overview
- Example
- Promises and "Thenables"

### Using an Existing Promise

- The then Method
- Chaining Promises
- Comparison with Callbacks
- The catch Method
- The finally Method
- throw in then, catch, and finnaly Handlers
- The then Method with Two Arguments

### Adding Handlers to Already Settled Promises

### Creating Promises

- The Promise Constructor
- Promise.resolve
- Promise.reject

### Other Promise Utility Methods

- Promise.all
- Promise.race
- Promise.allSettled
- Promise.any

### Promise Patterns

- Handle Errors or Return the Promise
- Promises in Series
- Promises in Parallel

### Promise Anti-Patterns

- Unnecessary new Promise(/_..._/)
- Not Handling Errors (or Not Properly)
- Letting Errors Go Unnoticed When Converting a Callback API
- Implicitly Converting Rejection to Fullfillment
- Trying to Use Results Outside the Chain
- Using Do-Nothing Handlers
- Branching the Chain Incorrectly

### Promise Subclasses

### Old Hanbits to New

- Use Promises Instead of Success/Failure Callbacks

## CHAPTER 9: ASYNCHRONOUS FUNCTIONS, ITERATORS, AND GENERATORS

### anync Functions

- async Functions Create Promises
- await Consumes Promises
- Standard Logic Is Asynchronous When await Is Used
- Rejections Are Exceptions, Exceptions Are Rejections; Fulfillments Are Results, Returns Are Resolutions
- Parallel Operations in async Functions
- You Don't need return await
- Pitfall: Using an async Function in an Unexpected Place

### async Iterators, Iterables, and Generators

- Asynchronous Iterators
- Asynchronous Generators
- for-await-of

### Old Habits to New

- Use async Functions and await Instead of Explicit Promises and then/catch

## CHAPTER 10: TEMPLATES, TAG FUNCTIONS, AND NEW STRING FEATURES
