function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:10,y:10};

    let optimizeLocation = function(factor){
        // ...
    }

    this.draw = function(){ // Closure
        optimizeLocation(45);
        console.log('Draw');
    }
}

const circle = new Circle(20);
