function Circle(radius){
    this.radius = radius;
    this.location = {x:10,y:20};
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(23);

// Print all properties and methods in an object
for(var key in circle){
    console.log(key, circle[key]);
}

// Print only properties in an object
for(var key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

const values = Object.values(circle);
console.log(values);

if('radius' in circle)
    console.log('Circle has a radius')