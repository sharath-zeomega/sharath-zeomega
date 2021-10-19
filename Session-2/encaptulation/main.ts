class Employee{

    //encaptulation
    private _id:number;
    private _name:string;

    // constructor(id:number,name:string){
    //     this.id=id;
    //     this.name=name;
    // }

    //getters and setters
    get id():number{
       return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    set name(name:string){
        this._name=name;
    }

}

let e1:Employee =new Employee();
e1.id=23;
e1.name="sonam soni";

console.log(e1.id+" "+e1.name);

//to compile getters --> tsc main.ts --target es5
