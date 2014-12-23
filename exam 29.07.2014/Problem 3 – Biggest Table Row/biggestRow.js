function biggestRow(input){

    var regex = /<tr><td>([\w]+)<\/td><td>((-?[\d]+\.?[\d]*)|(-))<\/td><td>((-?[\d]+\.?[\d]*)|(-))<\/td><td>((-?[\d]+\.?[\d]*)|(-))<\/td><\/tr>/;
    var maxSum = - 400000;
    var sum = - 500000;
    var maxA ;
    var maxB;
    var maxC;
    var maxMatches = [];
    var a;
    var b;
    var c;

    for(var i = 2; i < input.length - 1;i++){
        var match = regex.exec(input[i]);
        if(match[3] == undefined){
            a = 0;
        }
        else{
            a = Number(match[3])
        }

        if(match[6] == undefined){
            b = 0;
        }
        else{
            b = Number(match[6]);
        }

        if(match[9] == undefined){
            c = 0;
        }
        else{
            c = Number(match[9]);
        }

        sum = a + b + c;
        if (sum > maxSum){
            maxSum = sum;
            maxA = match[3];
            maxB = match[6];
            maxC = match[9];
        }

    }

    if(maxA != undefined){
        maxMatches.push(maxA);
    }
    if(maxB != undefined){
        maxMatches.push(maxB);
    }

    if(maxC != undefined){
        maxMatches.push(maxC);
    }

    if(maxMatches.length == 0){
        console.log('no data');
    }
    else{
        console.log(maxSum + ' = ' + maxMatches.join(' + '));
    }
}

biggestRow(['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
'</table>']);

