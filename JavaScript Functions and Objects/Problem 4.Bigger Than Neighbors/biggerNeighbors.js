var inputData = [2, [1, 2, 3, 3, 5], 2, [1, 2, 5, 3, 4], 5, [1, 2, 5, 3, 4], 0, [1, 2, 5, 3, 4]];

function biggerThanNeighbors(index,arr){

    if((index == 0) || (index == arr.length - 1)){
        return 'only one neighbor';
    }

    if((index < 0) || (index > arr.length - 1)){
        return 'invalid index';
    }

    if( arr[index] > arr[index+1] && arr[index] > arr[index-1]){
        return 'bigger';
    }
    else{
        return 'not bigger';
    }

}

for (var i = 0 ; i< inputData.length; i +=2){
    console.log(inputData[i] +', [' + inputData[i+1] + '] --> ' + biggerThanNeighbors(inputData[i],inputData[i+1]));
}