
function revealTriangles(input) {

    var output = [];
    var i;

    for (i = 0; i < input.length; i++){
        output[i] = input[i].split('');
    }

    for (var row = 1; row < input.length ; row++){
        var maxCol = Math.min(input[row].length-3,input[row-1].length-2);
        for (var col = 0; col <= maxCol; col++){
            var a = input[row][col];
            var b = input[row][col+1];
            var c = input[row][col+2];
            var d = input[row-1][col+1];
            if(a==b && b==c && c==d){
                output[row][col] = '*';
                output[row][col+1] = '*';
                output[row][col+2] = '*';
                output[row-1][col+1]= '*';
            }
        }
    }

    for(var row = 0; row < input.length; row++){
        console.log(output[row].join(''));
    }
}
