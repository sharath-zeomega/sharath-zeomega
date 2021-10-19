export class Product1{
    pid:number;
    pname:string;
    availability:string;
    rating:number;

    constructor(pid:number,pname:string,availability:string,rating:number){
        this.pid=pid;
        this.pname=pname;
        this.availability=availability;
        this.rating=rating;
    }

    display(){
        console.log("Product Id: "+this.pid);
        console.log("Product Name: "+this.pname);
        console.log("Availability: "+this.availability);
        console.log("Rating: "+this.rating);
    }
}