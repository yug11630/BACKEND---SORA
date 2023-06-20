// class Date {
//     getFullYear() {

//     }

//     getMonth() {

//     }

// }

const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
// date.getFullYear()
// date.getMonth() + 1 // getMonth()는 0부터 시작해서 + 1

class Monster {
    power = 10
    
    constructor(A) { // constructor = 생성자
        this.power = A

    }

    attack = () => {
        console.log("공격하자!")
        console.log(`내 공격력은 ${this.power}이야!!!`) //this가 생략되어 있다는 걸 잊지말자 꼭 this를 붙여줘야한다.
    }

    run = () => {
        console.log("도망가자!")
    }
}

const myMonster1 = new Monster(20)
myMonster1.attack()
myMonster1.run()

const myMonster2 = new Monster(50)
myMonster2.attack()
myMonster2.run()