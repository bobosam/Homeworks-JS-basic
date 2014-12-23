var inputData = 'There is a man, his name was Bob.';

function findPalindromes (str){
    var palindromes=[];
    var inputArr = str.toLowerCase().split(/\W+/);
    for(var i = 0; i < inputArr.length; i++){
        if(inputArr[i] != '') {
            var tempWord ='';
            var check = true;
            var word = inputArr[i].split("");
            var wordRev = word.slice(0).reverse();
            for(var j = 0 ;j < word.length;j++){
                if(word[j] != wordRev[j]){
                    check = false;
                }
                tempWord = tempWord + word[j];
            }
            if(check == true){
                palindromes.push(tempWord);
            }
        }
    }
    return palindromes.join(', ');
 }

var palindromesStr = findPalindromes(inputData);
console.log(palindromesStr);