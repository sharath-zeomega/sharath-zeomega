class Plane{
    noOfEngines:number;
    engineStatus:boolean;
    constructor(noOfEngines:number){
            this.noOfEngines=noOfEngines;
            this.engineStatus=false;
    }

    statEngine():void{
        console.log("Engine Started");
        this.engineStatus=true;
        console.log("engine status "+this.engineStatus )
    }

    static badWeather(plane:Plane){
        console.log("Bad Weather, need to stop engine");
        plane.engineStatus=false;
        console.log("engine status "+plane.engineStatus )
    }
    static badWeather1(planes:Plane[]){
        console.log("Bad Weather, need to stop engine");
        for(let p of planes)
        {
            p.engineStatus=false;
            console.log("engine status "+p.engineStatus )
        }
    }
}

const p1:Plane=new Plane(3);
p1.statEngine();
const p2:Plane=new Plane(4);
p2.statEngine();
const p3:Plane=new Plane(3);
p3.statEngine();
//Plane.badWeather(p1);
Plane.badWeather1([p1,p2,p3]);
