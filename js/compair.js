const first = 2;
const second = 2;
if(first === second){
    // console.log('they are same')
}else{
    // console.log('different')
}

const first1 = {a: 5, b: 2, d:5};
const second2 = {a: 5, c: 5, b:2};
const firstString = JSON.stringify(first1);
const secondString = JSON.stringify(second2);
// console.log(firstString, secondString)
// if(firstString === secondString){
//     console.log('they are same')
// }else{
//     console.log('different')
// }
function comPairObject(first1,second2){
    const firstKeys = Object.keys(first1);
    const secondKeys = Object.keys(second2);
    if(firstKeys.length === secondKeys.length){
       for (const key of firstKeys){
        if(first1[key] !== second2[key]){
            return false;
        }
       }
       return true;
    }
    else{
        return false;
    }
}
const isSame = comPairObject(first1, second2)
// console.log(isSame)

var examPass = true;
var markShit = 40;
if(examPass == true || markShit >50){
    // console.log('pass')
}else{
    // console.log('fail')
}
// const obj ={a:1, b:7, c:3, length:2};
// console.log(Object.keys(obj).length);

// const obj1= {module: 35, video:2}; 
// const obj2= {module: 35, video:2};
// console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 