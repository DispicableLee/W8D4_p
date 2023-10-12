Function.prototype.myBind = function(context){
    const func = this

    return function(){
        func.apply(context)
    }
}
Function.prototype.myBindTwo = function(context, args){
    const func = this
    let argss = args
    return function(){
        func.apply(context, argss)
    }
}

Function.prototype.myBindThree = function(context, args){
    const func = this
    let argss = args
    return function(argss){
        func.apply(context)(argss)
    }
}




class Cat {
    constructor(name){
        this.name = name;
    }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");

// console.log(markov.says.myBindTwo(pavlov,[ "meow", "Kush"])());
console.log(markov.says.myBindThree(pavlov)("meow", "a tree"));