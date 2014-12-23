var inputData = [6, -55, 133, 14567, 'nklnklnlk'];

function lastDigitAsText(number){
    var numberStr = number.toString();
    var digit = numberStr[numberStr.length - 1];
    var text = '';
    switch (digit){
        case '0': text = 'Zero'; break;
        case '1': text = 'One'; break;
        case '2': text = 'Two'; break;
        case '3': text = 'Three'; break;
        case '4': text = 'Four'; break;
        case '5': text = 'Five'; break;
        case '6': text = 'Six'; break;
        case '7': text = 'Seven'; break;
        case '8': text = 'Eight'; break;
        case '9': text = 'Nine'; break;
        default : text = 'NaN'; break;
    }
    return text;
}

for(var i = 0; i < inputData.length; i++){
    console.log(inputData[i] + ' --> ' + lastDigitAsText(inputData[i]));
    console.log('------------------------------');
}