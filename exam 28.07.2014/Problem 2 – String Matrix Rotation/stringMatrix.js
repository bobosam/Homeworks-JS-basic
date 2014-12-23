function StringMatrixRotation(input){
    function loadMatrix(input){
        var matrix = [];
        var maxLength = 0;
        var i;
        for(var i = 1;i < input.length; i++){
            if(input[i].length > maxLength){
                maxLength = input[i].length;
            }
        }

        for(i = 1; i< array.length; i++){
            var row = input[i] + Array(maxLength - input[i].length + 1).join(' ');
            matrix.push(row.split(''));
        }
    }

    function rotatedMatrix90(matrix){
        var newMatrix = [];
        var row;
        var col;
        for(row = 0; row < array.length;row++){
            newCol = matrix.length-row;
            for(col = 0 ; col < array.length; col ++){
                newRow = col;
                newMatrix[newRow][newCol] = matrix[row][col];
            }
        }
    }


    var degAsString= input[0].match(/\d+/);
    var deg = Number(degAsString[0]);

    var matrix = [];
    var rotatedMatrix = [];

    matrix = loadMatrix(input);
    rotatedMatrix = rotatedMatrix90(matrix);
    print (rotatedMatrix);

}