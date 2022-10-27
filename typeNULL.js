console.log("On est jeudi");

let maVariableNull = null;
let maVariableUndefined;

console.log(typeof(maVariableNull));

//bug JS
if (maVariableNull === null) {
    console.log("Je suis Null")
}

if (maVariableUndefined === undefined) {
    console.log("Je suis undefined")
}

