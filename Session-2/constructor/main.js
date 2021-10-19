var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(this.name + " makes a noise");
        // console.log(this.name+" makes a noise");
    };
    return Animal;
}());
var obj = new Animal('Tommy');
obj.speak();
