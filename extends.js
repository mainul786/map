class TeamMember{
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

class Developer extends TeamMember{
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    addComment(){
        console.log(`${this.name} hi this to good.`)
    }
}

const najiya = new TeamMember('najiya', 'west Bengal');
console.log(najiya);

const dev = new Developer('januman', 'murshidabad','react');
console.log(dev)