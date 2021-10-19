var Plane = /** @class */ (function () {
    function Plane(noOfEngines) {
        this.noOfEngines = noOfEngines;
        this.engineStatus = false;
    }
    Plane.prototype.statEngine = function () {
        console.log("Engine Started");
        this.engineStatus = true;
        console.log("engine status " + this.engineStatus);
    };
    Plane.badWeather = function (plane) {
        console.log("Bad Weather, need to stop engine");
        plane.engineStatus = false;
        console.log("engine status " + plane.engineStatus);
    };
    Plane.badWeather1 = function (planes) {
        console.log("Bad Weather, need to stop engine");
        for (var _i = 0, planes_1 = planes; _i < planes_1.length; _i++) {
            var p = planes_1[_i];
            p.engineStatus = false;
            console.log("engine status " + p.engineStatus);
        }
    };
    return Plane;
}());
var p1 = new Plane(3);
p1.statEngine();
var p2 = new Plane(4);
p2.statEngine();
var p3 = new Plane(3);
p3.statEngine();
//Plane.badWeather(p1);
Plane.badWeather1([p1, p2, p3]);
