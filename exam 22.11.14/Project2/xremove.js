function xRemove(input){

    var output = [];
    var row;
    var col;
    var checkInput = [];

    for(var i = 0; i < input.length; i++){
        output[i] = input[i].split('');
        checkInput[i] = input[i].toLowerCase().split('');
    }

    if(input.length > 2){

        for(row = 0 ; row < input.length -2; row++){
            for(col = 0 ; col < output[row].length - 2; col++){
                var a = checkInput[row][col];
                var b = checkInput[row][col+2];
                var c = checkInput[row+1][col+1];
                var d = checkInput[row+2][col];
                var e = checkInput[row+2][col+2];

                if(a==b && b==c && c==d && d==e){
                    output[row][col] = '';
                    output[row][col+2] = '';
                    output[row+1][col+1] = '';
                    output[row+2][col] = '';
                    output[row+2][col+2] = '';
                }
            }
        }

        for(row = 0; row < input.length; row++){
            console.log(output[row].join(''));
        }
    }

}