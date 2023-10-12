// Function.prototype.myBind = function(context){
//     const func = this

//     return function(){
//         func.apply(context)
//     }
// }

// Function.prototype.myBindTwo = function(context){
//     const func = this
//     let bindArgs = Array.from(arguments).slice(1)
    
//     return function(){
//       let callArgs = Array.from(arguments)

//         func.call(context, ...bindArgs, ...callArgs)
//     }
// }


Function.prototype.myBindTwo = function(context){
    const func = this
    let bindArgs = Array.from(arguments).slice(1)
    
    return function(){
      let callArgs = Array.from(arguments)

        func.apply(context, bindArgs.concat(callArgs))
    }
}

// Function.prototype.myBindThree = function(context){
//     const func = this
//     return function(...arguments){
//         func.apply(context, arguments)
//     }
// }




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
// console.log(markov.says.myBindThree(pavlov)("meow", "a tree"));
console.log(markov.says.myBindTwo(pavlov, "meow")("Markov"))