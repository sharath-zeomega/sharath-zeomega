var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.speak = function () {
        console.log(this.name + " makes a noise");
        // console.log(this.name+" makes a noise");
    };
    return Animal1;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.speak = function () {
        _super.prototype.speak.call(this); //parent class speak method
        console.log(this.name + " color is " + this.color);
        console.log(this.name + " barks");
    };
    return Dog;
}(Animal1));
var obj1 = new Animal1('Tommy');
obj1.speak();
var d = new Dog('Shadow', 'white');
d.speak();
