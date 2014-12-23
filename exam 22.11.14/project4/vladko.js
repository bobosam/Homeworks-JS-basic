function solve(input){

    var colors = {};

    for (var i = 0; i < input.length; i++){

        var currentLine = input[i].split('|');
        var color = currentLine[0].trim();

        if(!colors[color]){
            colors[color]={
                'age':0,
                'name':'',
                'opponents':[],
                'win' : 0,
                'loss':0,
                'rank':0
            }
        }
            if(currentLine[1].trim() == 'age'){
                colors[color].age = currentLine[2].trim()
            }
            if(currentLine[1].trim() == 'name'){
                colors[color].name = currentLine[2].trim()
            }
            if(currentLine[1].trim() == 'win'){
                colors[color].win ++;
                colors[color].opponents.push(currentLine[2].trim());
            }
            if(currentLine[1].trim() == 'loss'){
                colors[color].loss ++;
                colors[color].opponents.push(currentLine[2].trim());
            }



    }
    var keyColors =Object.keys(colors);
    /*for(var i = 0; i< keyColors.length;i++){
        var tmp = keyColors[i];
        if(colors[tmp].age == 0 || colors[tmp].name ==''){
            delete colors[tmp];
        }
    }*/
    keyColors.sort();

    var output = {};
    for (var i = 0; i < keyColors.length; i++){
        var curr = keyColors[i];
        output[curr] = colors[curr];

        output[curr].opponents.sort();
        output[curr].rank = (((Number(output[curr].win))+1)/((Number(output[curr].loss))+1)).toFixed(2);
        delete output[curr].win;
        delete output[curr].loss;
    }
    for(var i = 0; i< keyColors.length;i++){
     var tmp = keyColors[i];
     if(colors[tmp].age == 0 || colors[tmp].name ==''){
     delete output[tmp];
     }
     }
    console.log(JSON.stringify(output));

}

/*solve(['purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'])
*/