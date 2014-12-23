var inputData = [3, 127, 588];

function evenNumber(number){
    return console.log((number %2 == 0) ? (number +' --> true') : (number + ' --> false'));
}

for(var i = 0 ; i < inputData.length ; i++){
    evenNumber(inputData[i]);
}