Function.prototype.inherits = function(parent){
    
    function Surrogate(){};

    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {};

MovingObject.prototype.sayHi = function(){
    console.log("hi");
}

function Ship (name) {
    this.name = name
}

const boat = new Ship("Boaty McBoatface")
Ship.inherits(MovingObject);
console.log(boat)

console.log(boat.sayHi())


function Asteroid () {}
Asteroid.inherits(MovingObject);