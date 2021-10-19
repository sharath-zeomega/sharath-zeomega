interface CommonFeatures{
    name:string;

    //method declaration
    create(); //save Object
    getAll(); //get All objects
}

class Product implements CommonFeatures{
    name: string;
    price:number;

    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }
    create() {
        console.log("Product Created")
    }
    getAll() {
        console.log("Retrived All Products");
        console.log(this.name+" "+this.price);
    }
    
}

class Student implements CommonFeatures{
    name: string;
    std:string;

    constructor(name:string,std:string){
        this.name=name;
        this.std=std;
    }
    create() {
        console.log("Student Created")
    }
    getAll() {
        console.log("Retrived All Students");
        console.log(this.name+" "+this.std);
    }
    
}

let p:CommonFeatures=new Product('Mobile Phone',70000);
p.create();
p.getAll();

let s:CommonFeatures=new Student("Porter","12th");
s.create();
s.getAll();