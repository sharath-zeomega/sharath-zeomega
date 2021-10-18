function demo(firstName:string,...extra:string[]){

    console.log(firstName+" "+extra.join(" "));
}

demo("sonam","Nikunj" ,"soni");

//create method with rest para --> number array
//calculate its sum

const sum1= (...num:number[]):number=>{
    let result=0;
    for(let i=0;i<num.length;i++){
        result=result+num[i];
    }
    return result;
}

console.log("Result "+sum1(10,20,30,40,50,60,70));

function restWithAny(firstParam:any,...exta:any[]){
    console.log(firstParam+" "+exta.join(" "));
    
    
}
restWithAny(1,'asdf',3,4.3,"aaaa");
