var inputData = [['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
                ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
                ['3', '5', 'g', 'd'],
                ['5', '3', 'g', 'd'],
                ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
                ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'],
                [2],['2']];

function compareChars(arr1, arr2){
    var check = true;
    if (arr1.length != arr2.length){
        check = false;
    }
    else {
        for (var i = 0 ; i < arr1.length ; i++){
            if(arr1[i] !== arr2[i]){
                check = false;
                break;
            }
        }
    }
    console.log(arr1);
    console.log(arr2);
    console.log((check) ? 'Equal' : 'Not Equal');
    console.log('--------------------------------------------------------------------------------');
}

for(var i = 0 ; i < inputData.length ; i += 2){
    compareChars(inputData[i], inputData[i+1]);
}