var inputData = [[2, 4], [5, 8], [12, 3]];

function calcCylinderVol(arr){
    var cylinderVolume = (Math.PI * Math.pow(arr[0],2)*arr[1]).toFixed(3);
    return console.log( arr + ' --> ' + cylinderVolume);
}

for(var i = 0; i < inputData.length ; i++){
    calcCylinderVol(inputData[i]);
}