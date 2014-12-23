var inputData = ['( ,( a + b ) / 5 – d )',
                ') ( a + b ) )',
                '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )',
                ')('];
function checkBrackets(str){
    var counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === '('){
            counter++;
        }
        if(str.charAt(i) === ')'){
            counter--;
        }
        if (counter < 0){
            break;
        }
    }
    if(counter === 0){
        console.log(str + '  --> ' + 'correct');
    }
    else{
        console.log(str + '  --> ' + 'incorrect');
    }
}
for(var i = 0; i < inputData.length ; i++){
    checkBrackets(inputData[i]);
}