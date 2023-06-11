# Redux Style Guide

## Introduction

This is the official style guide for writing Redux code. It lists our recommended patterns, best practices, and suggested approaches for writing Redux applications.

Both the Redux core library and most of the Redux documentation are unopinionated. There are many ways to use Redux, and much of the time there is no single "right" way to do things.

However, time and experience have shown that for some topics, certain approaches work better than others. In addition, many developers have asked us to provide official guidance to reduce decision fatigue.

With that in mind, we've put together this list of recommendations to help you avoid errors, bikeshedding, and anti-patterns. We also understand that team preferences vary and different projects have different requirements, so no style guide will fit all sizes. You are encouraged to follow these recommendations, but take the time to evaluate your own situation and decide if they fit your needs.

Finally, we'd like to thank the Vue documentation authors for writing the Vue Style Guide page, which was the inspiration for this page.

## Rule Categories

We've divided these rules into three categories:

### Priority A: Essential

These rules help prevent errors, so learn and abide by them at all costs. Exceptions may exist, but should be very rare and only be made by those with expert knowledge of both JavaScript and Redux.

### Priority B: Strongly Recommended

These rules have been found to improve readability and/or developer experience in most projects. Your code will still run if you violate them, but violations should be rare and well-justified. Follow these rules whenever it is reasonably possible.

### Priority C: Recommended

Where multiple, equally good options exist, an arbitrary choice can be made to ensure consistency. In these rules, we describe each acceptable option and suggest a default choice. That means you can feel free to make a different choice in your own codebase, as long as you're consistent and have a good reason. Please do have a good reason though!

## Priority A Rules: Essential

### Do Not Mutate State [Essential]

Mutating state is the most common cause of bugs in Redux applications, including components failing to re-render properly, and will also break time-travel debugging in the Redux DevTools. Actual mutation of state values should always be avoided, both inside reducers and in all other application code.

Use tools such as `redux-immutable-state-invariant` to catch mutations during development, and `Immer` to avoid accidental mutations in state updates.

> Note: it is okay to modify copies of existing values - that is a normal part of writing immutable update logic. Also, if you are using the Immer library for immutable updates, writing "mutating" logic is acceptable because the real data isn't being mutated - Immer safely tracks changes and generates immutably-updated values internally.

### Reducers Must Not Have Side Effects [Essential]

### Do Not Put Non-Serializable Values in State or Actions [Essential]

### Only One Redux Store Per App [Essential]

## Priority B Rules: Strongly Recommended

### Use Redux Toolkit for Writing Redux Logic [Strongly Recommended]

### Use Immer for Writing Immutable Updates [Strongly Recommended]

### Structure Files as Feature Folders with Single-File Logic [Strongly Recommended]

### Put as Much Logic as Possible in Reducers [Strongly Recommended]

### Reducers Should Own the State Shape [Strongly Recommended]

### Name State Slices Based On the Stored Data [Strongly Recommended]

### Organize State Structure Based on Data Types, Not Components [Strongly Recommended]

### Treat Reducers as State Machines [Strongly Recommended]

Many Redux reducers are written "unconditionally". They only look at the dispatched action and calculate a new state value, without basing any of the logic on what the current state might be. This can cause bugs, as some actions may not be "valid" conceptually at certain times depending on the rest of the app logic. For example, a "request succeeded" action should only have a new value calculated if the state says that it's already "loading", or an "update this item" action should only be dispatched if there is an item marked as "being edited".

To fix this, treat reducers as "state machines", where the combination of both the current state and the dispatched action determines whether a new state value is actually calculated, not just the action itself unconditionally.

### Normalize Complex Nested/Relational State [Strongly Recommended]

### Keep State Minimal and Derive Additional Values [Strongly Recommended]

### Model Actions as Events, Not Setters [Strongly Recommended]

### Write Meaningful Action Names [Strongly Recommended]

### Allow Many Reducers to Respond to the Same Action [Strongly Recommended]

### Avoid Dispatching Many Actions Sequentially [Strongly Recommended]

Avoid dispatching many actions in a row to accomplish a larger conceptual "transaction". This is legal, but will usually result in multiple relatively expensive UI updates, and some of the intermediate states could be potentially invalid by other parts of the application logic. Prefer dispatching a single "event"-type action that results in all of the appropriate state updates at once, or consider use of action batching addons to dispatch multiple actions with only a single UI update at the end.

### Evaluate Where Each Piece of State Should Live [Strongly Recommended]

### Use the React-Redux Hooks API [Strongly Recommended]

### Connect More Components to Read Data from the Store [Strongly Recommended]

### Use the Object Shorthand Form of `mapDispatch` with `connect` [Strongly Recommended]

### Call `useSelector` Multiple Times in Function Components [Strongly Recommended]

### Use Static Typing [Strongly Recommended]

### Use the Redux DevTools Extension for Debugging [Strongly Recommended]

### Use Plain JavaScript Objects for State [Strongly Recommended]

## Priority C Rules: Recommended

### Write Action Types as domain/eventName [Recommended]

### Write Actions Using the Flux Standard Action Convention [Recommended]

### Use Action Creators [Recommended]

### Use RTK Query for Data Fetching [Recommended]

### Use Thunks and Listeners for Other Async Logic [Recommended]

### Move Complex Logic Outside Components [Recommended]

### Use Selector Functions to Read from Store State [Recommended]

### Name Selector Functions as `selectThing` [Recommended]

### Avoid Putting Form State In Redux [Recommended]
