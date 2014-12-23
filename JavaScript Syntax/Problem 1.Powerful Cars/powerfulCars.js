var inputData = [75, 150, 1000];

for(var i = 0; i < inputData.length ; i++){
    convertKWtoHP(inputData[i]);
}

function convertKWtoHP (carKw){
    var carHP = carKw / 0.745699872 ;
    return console.log(carKw + ' Kw ' + '--> ' + carHP.toFixed(2) + ' HP' );
}

