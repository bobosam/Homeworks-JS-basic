var inputData = { name: 'Pesho', age: 21 };
var  a = inputData;
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function compareObjects(obj, objCopy) {
    return obj === objCopy;
}

var b1 = clone(a);
var b2 = a; 

console.log('a == b --> %s', compareObjects(a, b1));
console.log('a == b --> %s', compareObjects(a, b2));