var inputData = ['Pesho', 22, true, ['fries', 'banana', 'cake']];

function variablesTypes(name, age, isMale, arr){
    console.log('\"My name: ' + name + ' //type is ' + typeof name);
    console.log('My age: ' + age + ' //type is ' + typeof age);
    console.log('I am male: ' + isMale + ' //type is ' + typeof isMale);
    console.log('My favorite foods are: ' + arr + '\n //type is ' + typeof arr + '\"')
}

variablesTypes(inputData[0], inputData[1], inputData[2], inputData[3]);