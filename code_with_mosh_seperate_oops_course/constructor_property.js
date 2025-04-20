//Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('Draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle.constructor);

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

const anotherCircle = new Circle(34);
console.log(anotherCircle.constructor);