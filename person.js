class Person{
    constructor(name) {
        this.name = name;
    }

    SayMyName(){
        return `Hello dev ${this.name}!`;
        
    }
}

module.exports = {
    Person,
}