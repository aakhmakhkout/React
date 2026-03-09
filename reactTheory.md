# what is react js: a js library -- A library is simply a collection of ready-made code written by other programmers that you can use in your own program.

react follows component based architecture

**Example Without Library**
let box = document.getElementById("box");

let position = 0;

setInterval(() => {
  position += 1;
  box.style.left = position + "px";
}, 10);

**Example With Library**
animate(box).moveRight(300)

# The Core Problem React Solves:

Imagine building a normal website with HTML + CSS + JavaScript. a navbar, a user profile, a todo list, a notification counter.

Every time something changes (for example you add a todo), JavaScript has to manually update the DOM.

example 
<ul id="todo">
  <li>Learn React</li>
</ul>

Now you add another task.

const li = document.createElement("li");
li.textContent = "Practice coding";
document.getElementById("todo").appendChild(li);

For small apps this is fine.

But for large apps (Facebook, Netflix, dashboards, etc.), we get:

hundreds of UI pieces, many state changes, lots of DOM updates, messy code.

# So the question arised:

What if the UI automatically updated itself whenever the data changed? --- That idea became React.


# REACT: React is a JavaScript library used to build user interfaces (UI) using reusable components.

What is a Component?

React divides the UI into small reusable pieces.
App
 ├ Navbar
 ├ Sidebar
 ├ Profile
 ├ TodoList
 │   ├ TodoItem
 │   ├ TodoItem
 │   └ TodoItem
 └ Footer

 each block is a component
eg.

 function Greeting() {
  return <h1>Hello User</h1>;
}

<Greeting /> //*5

Hello user
Hello user
Hello user
Hello user
Hello user


# JSX (React's Special Syntax) js xml

React uses something called JSX.

const element = <h1>Hello world</h1>; this may look like HTML, but it is actually js syntax. 

Behind the scenes React converts it into:

React.createElement("h1", null, "Hello world");

React follows a rule:

UI = function of data

Meaning the interface depends on the state (data).

state changes
      ↓
component re-renders
      ↓
React compares changes
      ↓
only the changed part updates

# React is a JavaScript library that helps developers build user interfaces using reusable components.
Each component depends on data (state), and when that data changes, React updates only the necessary parts of the page without reloading it.

A library is a collection of prewritten code that you call when you need it.
A framework is a structure that calls your code when it needs it.

# import export: (explained in code)

# Real DOM vs Virtual DOM.

# Real DOM
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>

body
 ├── h1
 │    └── "Hello"
 └── p
      └── "World"

This structure is the Real DOM — the actual representation the browser uses to display and update the page.

Now here’s the problem: changing the real DOM is expensive. Browsers must recalculate layout, repaint pixels, and sometimes reflow the page. That process takes time.

When you update something, the browser directly modifies the page.

Directly modifies the browser DOM
Slower for frequent updates
Each change triggers re-render work

# Virtual DOM

The Virtual DOM is a lightweight copy of the real DOM kept in memory
React creates a JavaScript representation of the UI.

Virtual DOM (JS object)

{
  type: "h1",
  children: "Hello"
}

When data changes, React:

Creates a new virtual DOM

Compares it with the previous virtual DOM (this is called diffing)

Finds what actually changed

Updates only those parts in the real DOM

This process is called reconciliation.

Lightweight copy in memory
React compares old vs new
Only minimal changes are applied
Faster for dynamic apps