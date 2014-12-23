var inputData = [[3, 2], [3, 3], [4, 5]];

function treeHouseCompare (arr){
    var houseArea = Math.pow(arr[0], 2) + arr[0] * (arr[0] - 1) /2;
    var treeArea= arr[1] * arr[1]/3 + Math.PI * Math.pow(arr[1] * 2 / 3 , 2);
    return console.log((houseArea > treeArea) ? (arr + ' --> ' + 'house/' + houseArea.toFixed(2))
                                            : (arr + ' --> ' + 'tree/' + treeArea.toFixed(2)));
}

for(var i = 0 ; i < inputData.length ; i++){
    treeHouseCompare(inputData[i])
}