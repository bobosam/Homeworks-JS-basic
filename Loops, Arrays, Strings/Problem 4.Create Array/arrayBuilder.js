var inputData = [20, 21];

function createArray(number){
    var arr = [];
    for(var i = 0; i < number ; i++){
        var value = i * 5;
        arr.push(value);
    }
    console.log(arr);
}

for(var i=0; i<inputData.length; i++){
    createArray(inputData[i]);
}
