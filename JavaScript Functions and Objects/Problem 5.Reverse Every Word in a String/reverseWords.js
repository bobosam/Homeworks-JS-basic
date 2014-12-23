var inputData = ['Hello, how are you.', 'Life is pretty good, isn’t it?'];

function reverseWordsInString(str){

    var wordsArr = str.split(' ');
    var reverseString = '';

    for(var i = 0; i < wordsArr.length; i++){
        var tmp = wordsArr[i].split('');
        tmp.reverse();
        var reverseWords = (tmp.join(''));
        reverseString += reverseWords + ' ';
    }

    return reverseString;

}

for(var i = 0; i < inputData.length; i++){
    console.log(inputData[i] + ' --> ' + reverseWordsInString(inputData[i]));
}