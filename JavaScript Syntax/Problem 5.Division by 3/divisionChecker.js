var inputData = [12, 188, 591];

function divisionBy3(number){
    return console.log((number %3 == 0) ? 'the number is divided by 3 without remainder'
                                        : 'the number is not divided by 3 without remainder');
}

for(var i = 0 ; i < inputData.length ; i++){
    divisionBy3(inputData[i]);
}