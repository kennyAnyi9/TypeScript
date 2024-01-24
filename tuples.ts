//tuples are more or less arrays with pre-defined length and types as implemented below

let firstTupple: [number, string, boolean];

firstTupple = [2, "3", false];

//note that the order matters so you cannot initiatlize the values of the tuple in a differnt order from the declararion

let wronglyInitializedTupple: [string, number, boolean];

wronglyInitializedTupple = [4, false, "/"]; // this would throw an error

// making your tuple readonly is a good practice since we do not have type safetly check when you try to append unto the tuple afterwards

let tupleWithoutReadonly: [string, string, number, boolean];

tupleWithoutReadonly = ["Kennedy", "Anyidoho", 3, false];
tupleWithoutReadonly.push("Age is not needed");

console.log(tupleWithoutReadonly); // this would be the log in the console :[ "Kennedy", "Anyidoho", 3, false, 'Age is not needed' ]

let tuplewithReadonly: readonly [string, string, number, boolean];
tuplewithReadonly = ["Kennedy", "Anyidoho", 3, false];

tuplewithReadonly.push("This is not editable"); // this would throw an error since it is readonly and this is better to avoid future bugs

//named tuple provides context for our tuple: see the example below

const register: [number, string] = [25, "age"];

//we could also destructure tuples

const [x, y] = register;

console.log(x, y); // should result in : 25 age
