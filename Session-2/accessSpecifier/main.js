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
var TestModifier = /** @class */ (function () {
    function TestModifier() {
        this.a = 20;
        this.b = 40;
        this.c = 60;
    }
    return TestModifier;
}());
var t = new TestModifier();
console.log(t.a);
//console.log(t.b); //can not access private properties outside a class
//console.log(t.c); // can not access protected procted properties outside a class
//protected we can access in subclasses of TestModifier class
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.display = function () {
        console.log(this.c);
    };
    return Child;
}(TestModifier));
var c = new Child();
c.display();
