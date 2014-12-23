var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 75},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];

function findYoungestPerson(persons){

    var minAge = Infinity;
    var minIndex;
    for(var i = 0; i < persons.length; i++){
        if(persons[i].age < minAge){
            minAge = persons[i].age;
            minIndex = i;
        }
    }
    console.log('The youngest person is '+persons[minIndex].firstname +' '+ persons[minIndex].lastname +'.');
}

findYoungestPerson(persons);