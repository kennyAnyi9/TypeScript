const StringAray: string[] = [];

StringAray.push("Kennedy"); //no error

StringAray.push(3); // error becuase it was specified that the array could only contain strings
StringAray.push("3"); // of course 3 in this case is a string so yes there would be no error

// there this keyword which when you use would make it impossible to perform any operation on the array(readony keyowrd)

const readonlyArray: readonly string[] = ["kennedy"];

readonlyArray.push("Anyidoho"); // as you can see that is an error (you would see a red line if you are using vs code)

//inference: when typescript figures out the type by itself

const inferedArray = ["kennedy"]; //typescript would automatically infer string for this array

inferedArray.push("Anyidoho"); // no error
inferedArray.push(2); // error here becuase typescript has automatically infered string on the array so no other datatype can be inserted in to it

let newVariable: string = inferedArray[0]; //no error
let anotherNewVariable: number = inferedArray[0]; // error because you cannot assign string to a number value
