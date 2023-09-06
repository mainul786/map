class Instructor{
    name;
    designation = 'web devoloper'
    team = 'web development'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'kolkata');
console.log(aamir);
aamir.startSupportSession('9.00pm');
aamir.createQuiz(60);