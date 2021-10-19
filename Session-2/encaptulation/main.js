var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "id", {
        // constructor(id:number,name:string){
        //     this.id=id;
        //     this.name=name;
        // }
        //getters and setters
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee();
e1.id = 23;
e1.name = "sonam soni";
console.log(e1.id + " " + e1.name);
