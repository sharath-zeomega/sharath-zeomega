let a1:any= '10String';
let b1:number=(<string>a1).length //type casting

let b2:string = b1+'';

console.log(b1);

console.log('type of B1 '+ typeof b1);

console.log(b2);

console.log('type of B2 '+ typeof b2);

console.log(a1);

console.log('type of a1 '+ typeof a1);