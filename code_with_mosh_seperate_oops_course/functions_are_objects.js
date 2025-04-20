function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
}

console.log(Circle);

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }    
`);

