var inputData = [22.7, 12.3, 58.7];

function roundNumber(number){
    var mathRound = Math.round(number);
    var mathFloor = Math.floor(number);
    return console.log(number + ' floor --> ' + mathFloor+
        '\n' + number + ' round --> ' + mathRound +
        '\n'+'---------------------------');
}

for(var i = 0; i < inputData.length; i++){
    roundNumber(inputData[i]);
}