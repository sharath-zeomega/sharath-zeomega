class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }

    speak():void{
        console.log(`${this.name} makes a noise`);
       // console.log(this.name+" makes a noise");
    }
}

const obj=new Animal('Tommy');
obj.speak();