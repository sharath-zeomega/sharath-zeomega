class Student{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}
class Queue<T>{
    data:T[]=[];

    push=(item:T)=>{this.data.push(item);}

    pop=():T => this.data.shift();
}

let n =new Queue<number>();
n.push(10);
n.push(20);
n.push(30);

console.log(n.data);
console.log(n.pop());
console.log(n.data);

let s=new Queue<string>();
s.push('vivekanad');
s.push('sunita');
s.push('chandra');

console.log(s.data);
console.log(s.pop());
console.log(s.data);

let students= new Queue<Student>();
students.push(new Student(1,'chnadra'));
students.push(new Student(2,'Naresh'));
students.push(new Student(3,'sonam'));

console.log(students.data);

console.log(students.pop());
console.log(students.data);