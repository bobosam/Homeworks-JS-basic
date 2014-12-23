var inputData = ['8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦',
                'J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠',
                '10♣ 10♥'];
function findCardFrequency(str){
    var tmpArr = str.split(/[\s♥♠♦♣]+/);
    var check = true;
    var tmpIndexArr = [];
    var counter = 0;
    for (var i = 0; i < tmpArr.length; i++){
        if(tmpArr[i] != ''){
           for(var j =0; j < tmpArr.length; j++){
                if (tmpArr[i] == tmpArr[j]){
                    counter++;
                }
            }
            for(var k = 0; k < tmpIndexArr.length; k++){
                if (tmpArr[i] == tmpIndexArr[k]){
                    check = false;
                }
            }
            if(check == true){
                tmpIndexArr.push(tmpArr[i]);
                console.log(tmpArr[i] + ' --> ' + (100 * counter/(tmpArr.length - 1)).toFixed(2) + '%');
            }
            counter=0;
            check = true;
        }
    }
}
for(var i = 0; i < inputData.length; i++){
    findCardFrequency(inputData[i]);
    console.log('------------------------------------------------------');
}
