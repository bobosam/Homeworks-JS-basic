function doubleRakiaNumbers(input){

    function isRakiaNumber(number){
        var pattern = /(\d{2})\d*\1/g;
        if((number.toString()).match(pattern)) {
            return true;
        }
        return false;
    }

    var start = Number(input[0]);
    var end = parseInt(input[1]);

    console.log('<ul>')

    for (var i = start; i <= end; i++){
        if(isRakiaNumber(number)){
            cnsole.log("<li><span class='rakiya'>11211</span><a href=\"view.php?id=11211\">View</a></li>");
        }
        else{
            console.log("<li><span class='num'>11213</span></li>");
        }

    }

    console.log('</ul>');

}

doubleRakiaNumbers(['11210', '11215']);