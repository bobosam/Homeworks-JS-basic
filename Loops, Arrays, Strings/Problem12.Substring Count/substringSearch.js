var inputData = [['in', 'We are living in a yellow submarine. We don\'t have anything else.' +
                    ' Inside the submarine is very tight. So we are drinking all the day.' +
                    ' We will move out of it in 5 days.'],
                ['your', 'No one heard a single word you said. They should have seen it in your eyes.' +
                    ' What was going around your head.'],
                ['but', 'But you were living in another world tryin\' to get your message through.']];
function countSubstringOccur(arr){
    var str = arr[1].toString().toLowerCase();
    var word = arr[0].toString().toLowerCase();
    var counter = 0;
    var tempStr = '';
    for (var i = 0 ; i < str.length - word.length; i++){
        tempStr =str.substr(i,word.length);
        if(tempStr === word){
            counter++;
        }
    }
    console.log(word + '  --> ' + counter);
}

for(var i = 0 ; i < inputData.length; i++){
    countSubstringOccur(inputData[i]);
}