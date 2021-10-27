class calc{
     add(a,b){
        return a+b;
    }

    check(age){
        if(age>18)
            return true;
        else
            return false;
    }
}

describe('test unit',function(){

    var cal;
    beforeAll(function(){
        console.log("Before All Specification")
    })
    afterAll(function(){
        console.log("After All specification")
    })
    beforeEach(function(){
        console.log("before each called");
        cal=new calc();
    })
    afterEach(function(){
        console.log("After each called");
        cal=null;
    })
    
    it ('hello',function(){
        console.log("test "+cal.add(23,34));
    })

    it('test add method',function(){
        expect(cal.add(2,3)).not.toBe(7);
    })
    it('test check function ',function(){
        expect(cal.check(12)).toBeFalsy()
    })
})