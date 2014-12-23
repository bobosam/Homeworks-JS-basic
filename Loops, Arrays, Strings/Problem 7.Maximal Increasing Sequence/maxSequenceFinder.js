var inputData = [[3, 2, 3, 4, 2, 2, 4],
                [3, 5, 4, 6, 1, 2, 3, 6, 10, 32],
                [3, 2, 1]];

function findMaxSequence(arr){
    var maxSequence = [];
    var tempSequence = [arr[0]];

    for( var i = 1 ; i <= arr.length; i++){
        if(arr[i]> arr[i-1]){
            tempSequence.push(arr[i]);
        }
        else if(tempSequence.length >= maxSequence.length){
            maxSequence = tempSequence.slice(0);
            tempSequence = [];
            tempSequence[0] = arr[i];
        }
        else {
            tempSequence = [];
            tempSequence[0] = arr[i];
        }
    }

    console.log(arr);
    if (maxSequence.length == 1){
        console.log('no');
    }
    else{
        console.log (maxSequence);
    }
    console.log ('----------------------------------------------------');
}

for (var i = 0; i < inputData.length ; i++){
    findMaxSequence(inputData[i]);
}