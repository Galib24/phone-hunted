// non primitive pass by reference && primitive pass by value
let student1 = {name: 'jalil', partner: 'borsha'};
let student2 = {name:'abul', partner: 'cagoli'};

function makeMovie(couple1, couple2){
    couple1.name = 'ononto';
    couple2.partner = 'mim';

}
// console.log(student1,student2);
makeMovie(student1, student2)
console.log(student1, student2);