 function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
}

const circle = new Circle(23);

/* Adding Properties to an Object */
// Dot Notation
circle.location = {x:40}; 

// Bracket Notation
const propertyName = 'precise-location';
circle[propertyName] = {x:56,y:70};

/* Removing Properties from an Object */

delete circle.location; // Dot Notation
delete circle[propertyName]; // Bracket Notation