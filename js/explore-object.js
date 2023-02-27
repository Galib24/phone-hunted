// object literals
const player = {};
player.name = 'small';
player.specialty = 'batsman';
player.bat = function(){
    // console.log('abul')
}
// console.log(player)
player.bat();

const student = {
    name: 'pandey', 
    job: 'khaoa',
     ball:function(){console.log('bal')
     },
     selary:4000
    }
    // object constructor
    const person = new Object();
    // console.log(person);

    // object create method
    const item = Object.create(student)
    // console.log(item.name);

    // class
    class detail{
        name= 'abul';
        address= 'khulna';
        constructor(age){
            this.age = age;

        }
    }
    const detail1 = new detail(65);
    // console.log(detail1)

    // function
    function car(model,price){
        this.model = model;
        this.price = price;

    }
    const tesla = new car('elon', 32)
    console.log(tesla)