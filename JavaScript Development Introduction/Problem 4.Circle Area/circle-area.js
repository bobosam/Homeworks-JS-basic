function calcCircleArea() {
    var input = document.getElementById("radius");
    input = Number(input.value);
    var r = input;
    var circleArea = Math.pow(r , 2)*Math.PI;
    document.getElementById("answer").innerHTML = circleArea;
    console.log(radius + " " + circleArea);
}
