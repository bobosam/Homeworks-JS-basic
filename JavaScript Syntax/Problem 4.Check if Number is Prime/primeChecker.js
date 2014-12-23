var inputData = [1, 2, 3, 4, 7, 254, 587];

function isPrime(number){
    var check = true;
    if(number < 2){
        check = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                check = false;
            }
        }
    }
    return console.log(number + ' --> ' + check);
}

for(var i = 0; i < inputData.length; i++){
    isPrime(inputData[i]);
}
