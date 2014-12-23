function pricesTrend(input){

    console.log('<table>');
    console.log('<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' +Number(input[0]).toFixed(2) + "</td><td><img src=\"fixed.png\"/></td></td>");

    for(var i = 1; i < input.length; i++){
        var prices = parseFloat((parseFloat(input[i-1]).toFixed(2)));
        var newPrices = parseFloat(parseFloat(input[i]).toFixed(2));

        if(newPrices > prices){
            console.log('<tr><td>' +Number(input[i]).toFixed(2) + '</td><td><img src=\"up.png\"/></td></td>');
        }
        else if(newPrices < prices){
            console.log('<tr><td>' +Number(input[i]).toFixed(2) + '</td><td><img src=\"down.png\"/></td></td>');
        }
        else{
            console.log('<tr><td>' + Number(input[i]).toFixed(2) + "</td><td><img src=\"fixed.png\"/></td></td>");
        }

    }

    console.log('</table>');
}

pricesTrend([1.33,
    1.35,
    2.25,
    13.00,
    0.5,
    0.51,
    0.5,
    0.5,
    0.33,
    1.05,
    1.346,
    20,
    900,
    1500.1,
    1500.10,
    2000
])