
// argument array like object
function sum(a, b,c){
    // console.log(arguments[4]);
    const args = [...arguments];
    // console.log(args);
    args.forEach(arg => {
        console.log(arg)
        
    });
    const result = a+b+c;
    return result;
}
const total = sum(45,89,12,45,98,56);
// console.log(total);