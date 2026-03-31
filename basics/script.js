let element = document.createElement("h1");
element.innerText = "hello world";
document.body.appendChild(element);

//! import export in js: each file is a module in js, we can export and import variables, functions, classes from one module to another module
//! export: we can export variables, functions, classes from a module using export keyword
//! import: we can import variables, functions, classes from a module using import keyword

//? A file can export something (make it available), and another file can import it (use it).

//* importing default
import sum2nums from "./app.js"; //* we can write anything as name, cause we are only exporting/importing 1 thing.

console.log(sum2nums);

//* importing multiple:

import { user1data, user2data, user3data, user4data } from "./app.js";

user1data();
user2data();
user3data();
user4data();

//? we can also import everything from a file.

import * as app from "./app.js";

console.log(app.username);

//? mixing default and named

import sumof2nums, {pi, pass} from "./app.js";
console.log(sumof2nums, pi, pass);