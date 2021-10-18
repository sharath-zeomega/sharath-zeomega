//default
function rateOfIntrest(principle:number,rate:number,years:number=1):number{
    return (principle*rate*years)/100;
}

console.log("Rate of Intrest "+ rateOfIntrest(2000,6,3));
console.log("Rate of Intrest "+ rateOfIntrest(2000,6));

//optional Para
function fullName(fname:string,lname:string,mname?:string):void{
    if(mname)
    console.log(fname+" "+mname+" "+lname);
    else
    console.log(fname+" "+lname);
}
fullName('sonam','soni','nikunj');
fullName('sonam','soni');