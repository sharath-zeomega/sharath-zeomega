var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    return Student;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var n = new Queue();
n.push(10);
n.push(20);
n.push(30);
console.log(n.data);
console.log(n.pop());
console.log(n.data);
var s = new Queue();
s.push('vivekanad');
s.push('sunita');
s.push('chandra');
console.log(s.data);
console.log(s.pop());
console.log(s.data);
var students = new Queue();
students.push(new Student(1, 'chnadra'));
students.push(new Student(2, 'Naresh'));
students.push(new Student(3, 'sonam'));
console.log(students.data);
console.log(students.pop());
console.log(students.data);
