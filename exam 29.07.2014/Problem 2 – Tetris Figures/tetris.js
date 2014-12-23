function tetris(input){

    function countI(input){

        var iCount = 0;
        if(input.length >=4){
            for(var row = 0 ; row < input.length - 3; row++){
                for(var col = 0; col < input[0].length; col++){
                    if( input[row][col] == 'o' &&
                        input[row+1][col] == 'o'&&
                        input[row+2][col] == 'o'&&
                        input[row+3][col] == 'o'){
                        iCount++;
                    }
                }
            }
        }
        return iCount;
    }
    function countL(input){

        var lCount = 0;
        if(input.length >=3){
            for(var row = 0 ; row < input.length - 2; row++){
                for(var col = 0; col < input[0].length-1; col++){
                    if( input[row][col] == 'o' &&
                        input[row+1][col] == 'o'&&
                        input[row+2][col] == 'o'&&
                        input[row+2][col+1] == 'o'){
                        lCount++;
                    }
                }
            }
        }
        return lCount;
    }

    function countJ(input){

        var jCount = 0;
        if(input.length >=3){
            for(var row = 0 ; row < input.length - 2; row++){
                for(var col = 1; col < input[0].length; col++){
                    if( input[row][col] == 'o' &&
                        input[row+1][col] == 'o'&&
                        input[row+2][col] == 'o'&&
                        input[row+2][col-1] == 'o'){
                        jCount++;
                    }
                }
            }
        }
        return jCount;
    }

    function countO(input){

        var oCount = 0;
        if(input.length >=2){
            for(var row = 0 ; row < input.length - 1; row++){
                for(var col = 0; col < input[0].length; col++){
                    if( input[row][col] == 'o' &&
                        input[row+1][col] == 'o'&&
                        input[row][col+1] == 'o'&&
                        input[row+1][col+1] == 'o'){
                        oCount++;
                    }
                }
            }
        }
        return oCount;
    }

    function countZ(input){

        var zCount = 0;
        if(input.length >=2){
            for(var row = 0 ; row < input.length - 1; row++){
                for(var col = 0; col < input[0].length; col++){
                    if( input[row][col] == 'o' &&
                        input[row][col+1] == 'o'&&
                        input[row+1][col+1] == 'o'&&
                        input[row+1][col+2] == 'o'){
                        zCount++;
                    }
                }
            }
        }
        return zCount;
    }

    function countS(input){

        var sCount = 0;
        if(input.length >=2){
            for(var row = 0 ; row < input.length - 1; row++){
                for(var col = 0; col < input[0].length; col++){
                    if( input[row+1][col] == 'o' &&
                        input[row+1][col+1] == 'o'&&
                        input[row][col+1] == 'o'&&
                        input[row][col+2] == 'o'){
                        sCount++;
                    }
                }
            }
        }
        return sCount;
    }

    function countT(input){

        var tCount = 0;
        if(input.length >=2){
            for(var row = 0 ; row < input.length - 1; row++){
                for(var col = 0; col < input[0].length; col++){
                    if( input[row][col] == 'o' &&
                        input[row][col+1] == 'o'&&
                        input[row][col+2] == 'o'&&
                        input[row+1][col+1] == 'o'){
                        tCount++;
                    }
                }
            }
        }
        return tCount;
    }
    console.log('{"I":'+countI(input)+',"L":'+countL(input)+',"J":'+countJ(input)+',"O":'+countO(input)+
                ',"Z":'+countZ(input)+',"S":'+countS(input)+',"T":'+countT(input)+'}');

}

tetris(['--o--o-',
'--oo-oo',
    'ooo-oo-',
    '-ooooo-',
    '---oo--'
])