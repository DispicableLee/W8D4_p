function continuousAdd(num){
    const args = []
    return function curryAdd(num){
        args.push(num)
        console.log(args.reduce((acc, el)=> acc+el))
        
        return curryAdd
    }
}

// const calcA = continuousAdd()

// console.log(calcA(1))
// console.log(calcA(1))
// console.log(calcA(2))


function currySum(num){
    let argLength = num
    let numbers = []
    return function curriedSum(num){
        numbers.push(num)
        if(numbers.length===argLength){
            console.log(numbers.reduce((acc, el)=> acc+el))
        }else{
            return curriedSum
        }
    }
}


Function.prototype.myCurry = function(numArgs){
    const func = this
    let argLength = numArgs
    let argArray = []
    return function curry(arg){
        argArray.push(arg)
        if(argArray.length===argLength){
            console.log(argArray)
            return func.apply(this, argArray)
            // return func(...argArray)
        }else{
            return curry
        }
    }
}


function add(num1, num2, num3){
    return num1 + num2 + num3
}

const sum = add.myCurry(3)
console.log(sum(1)(2)(3)) 
