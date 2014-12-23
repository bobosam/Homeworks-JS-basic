var inputData = [[3, 5, 2, 7, 9],
                ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
                ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
                ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']];

var result=[];

function soothsayer (numsArr, langsArr, citiesArr, carsArr) {
    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * 5);
        result[i] = inputData[i][index];
    }
    return result;
}
soothsayer(inputData[0], inputData[1], inputData[2], inputData[3]);
console.log('You will work ' + result[0] + ' years on ' + result[1] +
            '. You will live in ' + result[2] + ' and drive ' + result[3] + '.');

