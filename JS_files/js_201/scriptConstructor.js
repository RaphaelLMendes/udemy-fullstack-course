
class Person {
    constructor(name){
        this.name=name
    }

    greetings(){
        console.log(`greetings ${this.name}!`)
    }
}

const p = new Person('Rapha')

p.greetings()