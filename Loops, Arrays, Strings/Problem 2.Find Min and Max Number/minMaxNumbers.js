var inputData = [[1, 2, 1, 15, 20, 5, 7, 31],
                [2, 2, 2, 2, 2],
                [500, 1, -23, 0, -300, 28, 35, 12]];

function findMinAndMax(arr){
    var inputArr = arr.slice(0) ;
    arr.sort(function(a,b){
        return a - b ;
    });
    console.log(inputArr + '\nMin --> ' + arr[0] + '\nMax --> ' + arr[arr.length - 1]);
    console.log('-------------------------------')
}

for (var i = 0; i < inputData.length ; i++){
    findMinAndMax(inputData[i]);
}