class TestModifier{
    public a:number=20;
    private b:number=40;
    protected c:number=60;
}

const t :TestModifier=new TestModifier();
console.log(t.a);
//console.log(t.b); //can not access private properties outside a class
//console.log(t.c); // can not access protected procted properties outside a class
//protected we can access in subclasses of TestModifier class

class Child extends TestModifier{
    display():void{
        console.log(this.c);
    }
}

const x:Child=new Child();
x.display();
