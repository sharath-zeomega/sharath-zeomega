class Animal1{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    speak():void{
        console.log(`${this.name} makes a noise`);
       // console.log(this.name+" makes a noise");
    }
}

class Dog extends Animal1{
    color:string;
    constructor(name:string,color:string){
        super(name);
        this.color=color;
    }
    speak():void{
        super.speak();//parent class speak method
        console.log(this.name+ " color is "+this.color);
        console.log(this.name+ " barks");
    }
}

const obj1=new Animal1('Tommy');
obj1.speak();

const d:Dog= new Dog('Shadow','white');
d.speak();
