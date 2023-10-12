function sum(num){
    const args = []
    return function curryAdd(num){
        args.push(num)
        console.log(args.reduce((acc, el)=> acc+el))
        
        return curryAdd
    }
}

const calcA = sum()

console.log(calcA(1))
console.log(calcA(1))
console.log(calcA(2))


