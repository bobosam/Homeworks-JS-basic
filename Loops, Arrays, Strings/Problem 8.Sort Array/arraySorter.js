var inputData = [[5, 4, 3, 2, 1],
                [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3],
                [8, 8, 8, 8, 8, 0]];

function sortArray(arr){
    for (var i = 0; i < arr.length ; i++){
        for (var j = i+1; j < arr.length ; j++ ){
            if ( arr[j] < arr[i]){
                var temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

for (var i = 0; i < inputData.length; i++){
    sortArray(inputData[i]);
}
