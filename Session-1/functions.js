//named functions
function display() {
    console.log("print function called");
}
function add(x, y) {
    return x + y;
}
display();
console.log("Addition is " + add(23, 45));
//anonymous fuction
var sum = function (x, y) { return x + y; };
console.log("sum " + sum(10, 20));
var cube = function (n) { return n * n * n; };
console.log("Cube of 5 " + cube(5));
