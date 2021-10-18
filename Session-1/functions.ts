//named functions
function display():void{
    console.log("print function called");
}

function add(x:number,y:number): number{
    return x+y;
}

display();
console.log("Addition is "+ add(23,56));

//anonymous fuction == arraw functions

const sum=(x,y) => x+y;

console.log("sum "+sum(10,20));

const cube=n=> n*n*n;

console.log("Cube of 5 "+cube(5))