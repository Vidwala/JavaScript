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
circle.draw();

//Constructor Function
function Circle(radius){
    console.log('this', this);
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}

const anotherCircle = new Circle(34);
anotherCircle.draw();