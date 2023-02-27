// 8 ways to get undefine

// 1) variable that is not initialized will give undefined
let first;
// console.log(first)

// 2) function with no return
function second(a, b){
    const total = a+b;
}
const result = second()
// console.log(result)

// 3) parameter that is not passed will be undefined
function third(a,b,c,d){
    const total = a+b+c+d;
    console.log(a,b,c,d);
}
// third(2, 5);

// 4) if return has nothing on the right side will return undefined
function noNegative(a,b){
    if(a<0 || b<a){
        return
    }
    return a+b;
}
const total = noNegative(2,-5)
console.log(total);


// 5)property that dosent exist on an object will give undefined
const fifth = {id:2, name: 'ponchom', age: 40}
// console.log(fifth.age, fifth.salary)

// 6) accessing array elements outside of the index range
const sixth = [4, 67,74,67,13]
console.log(sixth[1],sixth[5],sixth[200]);

//7) for remove any array element using splice

// 8) 
const eight = undefined;
// undefine type of
console.log(typeof undefined);