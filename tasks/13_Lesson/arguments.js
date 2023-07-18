function printArguments(...args){
    args.forEach(arg => {
       console.log(arg); 
    });
}
const arguments = [1, 2, 3, "four", "five"];
printArguments(...arguments);