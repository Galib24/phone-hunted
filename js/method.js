const student = {
    name: 'Galib',
    money: 5000,
    study: 'Math',
    Subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
     return   this.name + 'is participating in an exam'
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
const output = student.exam();
// console.log(output)
const reExam = student.improveExam('algebra')
// console.log(reExam)
const remaining = student.treat(900);
console.log(remaining);
const dolaRemaining = student.treat(500);
console.log(dolaRemaining)