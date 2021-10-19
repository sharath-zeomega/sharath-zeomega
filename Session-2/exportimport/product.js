"use strict";
exports.__esModule = true;
exports.Product1 = void 0;
var Product1 = /** @class */ (function () {
    function Product1(pid, pname, availability, rating) {
        this.pid = pid;
        this.pname = pname;
        this.availability = availability;
        this.rating = rating;
    }
    Product1.prototype.display = function () {
        console.log("Product Id: " + this.pid);
        console.log("Product Name: " + this.pname);
        console.log("Availability: " + this.availability);
        console.log("Rating: " + this.rating);
    };
    return Product1;
}());
exports.Product1 = Product1;
