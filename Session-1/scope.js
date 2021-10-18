var x = 20;
var y = 30;
function test(x, y) {
    // let x=10;
    // const y=40;
    this.x = x;
    this.y = y;
    console.log("local " + this.x);
    console.log("local const " + this.y);
}
console.log("global " + x);
console.log("global const " + y);
test(10, 40);
