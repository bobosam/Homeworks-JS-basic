var inputData = [[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
                [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1],
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [7, 10, 8, 4, 3]];

function findMostFreqNum(arr){
    var maxCounter = 1;
    var mostNumber = arr[0];
    var counter = 1;

    for(var i = 0; i < arr.length; i++){
        for(var j = i +1; j <= arr.length; j++){
            if (arr[i] === arr[j]){
                counter++;
            }
        }
        if(counter > maxCounter){
            maxCounter = counter;
            mostNumber = arr[i];
            counter = 1;
        }
        else{
            counter = 1;
        }
    }

    console.log(arr + '   --> '+ mostNumber +' (' + maxCounter + ' times)');
}

for(var i = 0; i < inputData.length; i ++){
    findMostFreqNum(inputData[i]);
}
