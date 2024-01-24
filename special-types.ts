// ANY TYPE

let Kennedy = true; //typescript will infer boolean for this

console.log(typeof Kennedy); // this will log: bollean

// now when i try to assign a string to Kennedy there should be an error

Kennedy = "string"; // error: type string is not assignable to type boolean

//WE CAN AVOID THIS ERROR BY USING THE ANY TYPE

let Anyidoho: any = true;

console.log(typeof Anyidoho); // this should return any

// now let me assign a string to it and see

Anyidoho = "surname"; // this does not raise any issues because the type checking is kindof disabled

// UNKNOWN TYPE

//SIMILAR TO BUT SAFER THAN ANY

// unknown is best for situations where you do not know the type of data being used and the intention should be to cast the type later
// so when you use unknown and typescript does not know the datatype it will complain with an error

let w: unknown = 1;
w = "string"; // no error
