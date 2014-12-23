function solve(input) {

    var courses = {};

    for (var i = 0; i < input.length; i++) {

        var currentLine = input[i].match(/([A-Za-z]+\s[A-Za-z]+)|([A-Za-z#]+)|(\d\.\d+)|(\d+)/g);
        var name = currentLine[0];
        var course = currentLine[1];
        var grade = Number(currentLine[2]);
        var visit = Number(currentLine[3]);

        if (!courses[course]) {
            courses[course] = {
                'avgGrade': 0,
                'avgVisits': 0,
                'students': [],
                'countInputs': 0
            }
        }
        courses[course].avgGrade += grade;
        courses[course].avgVisits += visit;
        if (courses[course].students.indexOf(name) == -1) {
            courses[course].students.push(name);
        }
        courses[course].countInputs++;
    }

    var keyCourses = Object.keys(courses);
    keyCourses.sort();

    var output = {};
    for (var i = 0; i < keyCourses.length; i++) {
        var currCourse = keyCourses[i];
        output[currCourse] = courses[currCourse];

        output[currCourse].students.sort();
        output[currCourse].avgGrade = Number((output[currCourse].avgGrade / output[currCourse].countInputs).toFixed(2));
        output[currCourse].avgVisits = Number((output[currCourse].avgVisits / output[currCourse].countInputs).toFixed(2));
        delete output[currCourse].countInputs;
    }
    console.log(JSON.stringify(output));
}
solve(['Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'
]);