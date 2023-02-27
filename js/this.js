const person = {
    name: 'Galib',
    money: 5000,
    study: 'Math',
    Subjects: ['calculus', 'algebra','geometry'],
    exam: function(){
        console.log(this)
     return   this.name + ' is participating in an exam'
    },
    examArrow: () =>{
   console.log(this)
    },
    examNested: () =>{
    const arrow = () =>{
        console.log(this)
    }
    arrow();
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
person.exam()
const badamAli = {
    name:'kacha bdam',
    money: 8000
}

badamAli.exam = person.exam;
badamAli.exam();

function clickHandler(){
    console.log('inside there',this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})