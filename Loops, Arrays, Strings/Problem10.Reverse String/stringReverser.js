var inputData = ['sample', 'softUni', 'java script'];

function reverseString(str){
    var revStr = "";
    for(var i = 1; i <= str.length ; i++){
        revStr += str.charAt(str.length - i);
    }
    console.log(str + ' --> ' + revStr);
}

for (var i = 0; i < inputData.length; i++){
    reverseString(inputData[i]);
}