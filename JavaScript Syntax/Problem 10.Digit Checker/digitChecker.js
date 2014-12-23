var inputData = [1235, 25368, 123456];

function checkDigit(number){
    var dataString = number.toString();
    var index = dataString[dataString.length - 3];
    return console.log((index == '3') ? (number + ' --> ' + 'true')
                                        : (number + ' --> ' + 'false'));
}

for(var i = 0 ; i < inputData.length ; i++){
    checkDigit(inputData[i]);
}