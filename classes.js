class Human {
    name = ""
    constructor(name) {
        this.name = name
    }
    sayHi() {
        return`My name is ${this.name}! `
    }
}

class Teacher extends Human {
    currentlyTeaching = "yes"
    sayHi() {
        return `Hi, I'm professor ${this.name}`
    }
}

class Student extends Human {
    grade = 100
}

let student = new Student("Bobby")
let teacher = new Teacher("Jennifer")

console.log(`Teacher's name is ${teacher.name}`)
console.log(teacher.sayHi())
console.log(student.sayHi())