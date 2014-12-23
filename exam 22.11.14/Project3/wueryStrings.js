function queryString(input){

    for (var i = 0; i < input.length; i++){
        for (var j= 0 ; j <input[i].length-2;j++){
            if(input[i][j] == '+'){
                input[i][j] = ' ';
            }
            if(input[i][j] == '%'){
                input[i][j] = ' ';
                input[i][j+1] ='';
                input[i][j+2] ='';
            }
        }
        var currentLine = input[i].split(/[&\?]/);
        var key = '';
        var value = '';
        var output = '';
        var obj={};

        if(currentLine.length == 1){
            console.log(currentLine.join(''));
        }else {

            for(var j = 0;j < currentLine.length;j++){

                var tmp = currentLine[j].split('=');

                var key = tmp[0];
                var value = tmp[1];
                if(!obj[key]){
                    obj[key]={
                        'val':'['
                    }

                }
                obj[key].val += ',' +value;

            }
            var keys = Object.keys(obj);
            for ( var i= 0;i<keys.length;i++){
                output = keys[i] + '='+ obj[keys[i]].val +']';
            }
            var result = output.split('');

            console.log(result.join(''));

            }

    }







}

queryString([
    'foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]);