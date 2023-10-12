Function.prototype.inherits = function(parent){
    function Surrogate(){};

    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {};
MovingObject.prototype.sayHi = function(){
    return console.log("hi");
}


function Ship (name) {
    this.name = name
}


Ship.inherits(MovingObject);
Ship.prototype.sayBye = function() {
    return console.log("bye")
}
const boat = new Ship("Boaty McBoatface")

// console.log(boat.__proto__)
// console.log(boat.sayHi())
console.log(boat.sayBye())

//how can we create functions that instances of the Ship class can access and other classes cannot 




function Asteroid () {}
Asteroid.inherits(MovingObject);

const comet = new Asteroid()
// console.log(comet.sayBye())

console.log(MovingObject.prototype)
console.log(Ship.prototype)




