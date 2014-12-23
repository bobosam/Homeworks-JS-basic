var inputData = [4, 7, 8, 333, 425, 2567564754];

function bitChecker (number){
    var check = true;
    if(((number >> 3) & 1 ) != 1){
        check = false;
    }
    return console.log(number + ' --> ' + check);
}

for(var i = 0 ; i < inputData.length ; i++){
    bitChecker(inputData[i]);
}
