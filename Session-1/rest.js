function demo(firstName) {
    var extra = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        extra[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + extra.join(" "));
}
demo("sonam", "Nikunj", "soni");
//create method with rest para --> number array
//calculate its sum
var sum1 = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < num.length; i++) {
        result = result + num[i];
    }
    return result;
};
console.log("Result " + sum1(10, 20, 30, 40, 50, 60, 70));
function restWithAny(firstParam) {
    var exta = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        exta[_i - 1] = arguments[_i];
    }
    console.log(firstParam + " " + exta.join(" "));
}
restWithAny(1, 'asdf', 3, 4.3, "aaaa");
