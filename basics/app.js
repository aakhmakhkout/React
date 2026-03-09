function sumOfTwoNumbers(a, b) {
    return a + b;
}

//? export = default and named;

export default sumOfTwoNumbers(20, 45); //* is used when we want to export only 1 thing

//? named export: when we want to export many things from one file.

export function user1data() {
    console.log("kaneki")
}
export function user2data() {
    console.log("touka")
}
export function user3data() {
    console.log("isagi")
}
export function user4data() {
    console.log("yoichi")
}


export const pi = 3.14
export let username = "kaneki";
export let pass = "kaneki6677";
