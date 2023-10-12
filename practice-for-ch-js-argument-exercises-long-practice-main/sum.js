function sum(num){
    let args = Array.from(arguments);
    return args.reduce((acc,el) => acc + el);
}

console.log(sum(1, 2, 3, 4, 5))






