var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.create = function () {
        console.log("Prodcut Created");
    };
    Product.prototype.getAll = function () {
        console.log("Retrived All Products");
        console.log(this.name + " " + this.price);
    };
    return Product;
}());
var Student = /** @class */ (function () {
    function Student(name, std) {
        this.name = name;
        this.std = std;
    }
    Student.prototype.create = function () {
        console.log("Student Created");
    };
    Student.prototype.getAll = function () {
        console.log("Retrived All Students");
        console.log(this.name + " " + this.std);
    };
    return Student;
}());
var p = new Product('Mobile Phone', 70000);
p.create();
p.getAll();
var s = new Student("Porter", "12th");
s.create();
s.getAll();
