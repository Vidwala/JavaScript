function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:1,y:2};

    this.draw = function(){
        console.log('Draw');
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(v){
            if(!v.x || !v.y)
                throw new Error('Invalid Location.')
            defaultLocation = v;
        }
    });
}

const circle =  new Circle(45);

circle.defaultLocation = {x:2,y:3};

console.log(circle.defaultLocation);