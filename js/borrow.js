const person = {
    name: 'Galib',
    money: 5000,
    study: 'Math',
    Subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
     return   this.name + ' is participating in an exam'
    },
    improveExam: function(Subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${Subject}`
    },
    treat:function(amount){
        this.money = this.money - amount;
        return this.money
    }
}
const result = person.exam();

const badam = {
    name:'kacha bdam',
    money: 8000
}

// call
const result2 = person.exam.call(badam)
// console.log(result2);
const badamMoney = person.treat.call(badam, 400);
// console.log(badamMoney)

// apply
const badamMoney2 = person.treat.apply(badam, [1000]);
console.log(badamMoney2);

// bind
const badamAliTreat = person.treat.bind(badam);
const remaining = badamAliTreat(1000)
console.log(remaining);