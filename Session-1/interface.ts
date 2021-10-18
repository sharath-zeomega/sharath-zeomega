interface RectangleOptions{
    length:number,
    width:number
}

function drawRectangle(obj:RectangleOptions){
    console.log("length "+obj.length);
    console.log("width: "+obj.width);
}

let rect={length:10,width:20}

drawRectangle(rect);

drawRectangle({length:30,width:67});