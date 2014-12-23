var inputData = [[2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
                ['happy'],
                [2, 'qwe', 'qwe', 3, 3, '3'],
                [1, 1, 1, 2, 2, 2]];

function findMaxSequence (arr){
    var maxCount = 1;
    var counter = 1;
    var value = [arr[0]];
    for (var i = 1 ; i <= arr.length ; i++){
        if(arr[i] === arr[i-1]){
            counter ++;
        }
        else{
            if(counter >= maxCount){
                maxCount = counter;
                value = arr[i-1];
            }
            counter = 1;
        }
    }
    var maxSequence = [];
    for(var i = 0 ; i < maxCount; i++){
        maxSequence.push(value);
    }
    console.log(arr);
    console.log(maxSequence);
    console.log('-----------------------------------------------------');
}

for(var i = 0; i < inputData.length ; i++){
    findMaxSequence(inputData[i]);
}