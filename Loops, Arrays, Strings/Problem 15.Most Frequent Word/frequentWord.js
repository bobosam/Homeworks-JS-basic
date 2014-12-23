var inputData = ['in the middle of the night',
                'Welcome to SoftUni. Welcome to Java. Welcome everyone.',
                'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'];
function findMostFreqWord(str){
    var tmpArr = str.toLowerCase().split(/\W+/);
    tmpArr.sort();
    var maxCounter = 1;
    var counter = 1;
    for(var i = 1; i <= tmpArr.length; i++){
        if(tmpArr[i-1]== tmpArr[i]){
            counter++;
        }
        else if(counter > maxCounter){
            maxCounter = counter;
            counter = 1;
        }
        else{
            counter = 1;
        }
    }
    for(var i = 1; i <= tmpArr.length; i++){
        if(tmpArr[i-1]== tmpArr[i]){
            counter++;
            if(counter == maxCounter ){
                console.log(tmpArr[i] + ' --> ' + maxCounter + ' times');
            }
        }
        else if(counter > maxCounter){
            maxCounter = counter;
            counter = 1;
        }
        else{
            counter = 1;
        }
    }
    console.log('------------------------------------------------');

}
for(var i = 0 ; i < inputData.length; i++) {
    findMostFreqWord(inputData[i]);
}