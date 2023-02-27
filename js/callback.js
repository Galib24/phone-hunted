// function greeting(person){
//     console.log(person);
// }
// const number = [12,45,66]
// greeting('kabul mama')

function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('good morning',name)
}
function greetingEvening(name){
    console.log('good evening', name)
}
greeting(greetingHandler, 'Galib')
greeting(greetingHandler, 'abul')
greeting(greetingHandler, 'kabul')
greeting(greetingHandler, 'cabul')
greeting(greetingEvening, 'mabul')