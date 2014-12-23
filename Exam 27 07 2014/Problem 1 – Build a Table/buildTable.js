function buildTable(arr){
    var start = Number(arr[0]);
    var end = Number(arr[1]);

    function fibonacci(number){
        var check = 'no';
        if(number ===1){
            check = 'yes';
        }
        var first = 1;
        var second = 1;
        var third = 0;
        while(third <= number){
            third = first + second;
            if(third === number){
                check = 'yes';
            }
            first = second;
            second = third;
        }
        return check;
    }

    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for(var i = start; i <= end; i++){
        console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' +
                    fibonacci(i) + '</td></tr>');
    }
    console.log('</table>');
}

