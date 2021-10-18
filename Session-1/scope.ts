let x=20;
const y=30;

function test():void{
    let x=10;
    const y=40;
    console.log("local "+this.x);
    console.log("local const "+this.y);
}

console.log("global "+x);
console.log("global const "+y);
test();