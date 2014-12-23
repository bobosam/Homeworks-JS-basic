var inputData = [8, 3, 5, 356];

function convertDigitToWord(value){
    switch (value){
        case  1:console.log(value + ' --> '+ 'one');break;
        case  2:console.log(value + ' --> '+ 'two');break;
        case  3:console.log(value + ' --> '+ 'three');break;
        case  4:console.log(value + ' --> '+ 'four');break;
        case  5:console.log(value + ' --> '+ 'five');break;
        case  6:console.log(value + ' --> '+ 'six');break;
        case  7:console.log(value + ' --> '+ 'seven');break;
        case  8:console.log(value + ' --> '+ 'eight');break;
        case  9:console.log(value + ' --> '+ 'nine');break;
        default :console.log('not a digit');
    }
}

for(var i = 0; i < inputData.length ; i++){
    convertDigitToWord(inputData[i]);
}

