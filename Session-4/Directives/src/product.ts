export class Product{
    id:number;
    name:string;
    available:string;
    price:number;
    rating:number

    constructor(id:number,name:string,available:string,price:number, rating:number){
        this.id=id;
        this.name=name;
        this.available=available;
        this.price=price;
        this.rating=rating;
    }
}