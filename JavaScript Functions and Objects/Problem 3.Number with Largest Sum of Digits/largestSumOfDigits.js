var inputData = [[],[5, 10, 15, 111], [33, 44, -99, 0, 20], ['hello'], [5, 3.3]];

function findLargestBySumOfDigits(arr){

    var largestSum = 0;
    var currentSum =0;
    var largestNumber;
    var number;

    if(arr.length == 0){
        return undefined;
    }

    for(var i = 0; i < arr.length; i++){
        number = Math.abs((arr[i]));
        var intNumber = parseInt(number);
        if(intNumber !== number){
               return undefined;
        }
        while(number > 0){
            currentSum += number%10;
            number =parseInt(number /10);
        }

        if(currentSum > largestSum){
            largestSum = currentSum;
            largestNumber = arr[i];
            currentSum = 0;
        }
        else{
            currentSum = 0;
        }
    }

    return largestNumber;
}

for(var i = 0; i < inputData.length; i++){
    console.log('[' + inputData[i] + ']' + ' --> ' + findLargestBySumOfDigits(inputData[i]) );
}