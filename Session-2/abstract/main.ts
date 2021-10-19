abstract class Animal{
    abstract makeNoise():void;

    move(speed:number):void{
        console.log("Moved with speed "+speed+" /hour");
    }
}

class Cat extends Animal{

    makeNoise(): void {
        console.log("cat makes noise");
    }
    
}

const c:Cat=new Cat();
c.move(10);
c.makeNoise();
