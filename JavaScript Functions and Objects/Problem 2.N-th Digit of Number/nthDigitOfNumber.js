var inputData = [[1, 6], [2, -55], [6, 923456], [3, 1451.78], [6, 888.88]];

function findNthDigit(arr){
    var tmpArr = arr[1].toString().split(/[^0-9]+/);
    var tmpStr = '';
    for (var i = 0; i< tmpArr.length; i++){
        tmpStr += tmpArr[i];
    }
    if(tmpStr.length >= arr[0]) {
        var digit = tmpStr[tmpStr.length - arr[0]];
        return digit;
    }
    else{
        return ("The number doesn’t have " + arr[0] + " digits" );
    }
}

for(var i = 0 ; i < inputData.length ; i++){
    console.log(inputData[i] + ' --> ' + findNthDigit(inputData[i]));
    console.log('----------------------------------------------');
}