function drawRectangle(obj) {
    console.log("length " + obj.length);
    console.log("width: " + obj.width);
}
var rect = { length: 10, width: 20 };
drawRectangle(rect);
drawRectangle({ length: 30, width: 67 });
