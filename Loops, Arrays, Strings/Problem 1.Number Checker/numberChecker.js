var inputData = [1, 20, -5, 13];

function printNumbers(number){
    result = '';
    if(1 > number){
        console.log('no');
    }
    else {
        for(var i = 1 ; i <= number; i++){
            if(0 != i %4 && 0 != i%5){
                result += i + ', ';
            }
        }
        result = result.substring(0,result.length - 2);
        console.log(result);
    }
}

for(var i = 0; i < inputData.length ; i++){
    printNumbers(inputData[i]);
}