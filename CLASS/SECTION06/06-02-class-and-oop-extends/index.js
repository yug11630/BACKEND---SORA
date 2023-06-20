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

class 공중몬스터 extends Monster {
    constructor(B) {
        super(B + 1) // 공중 몬스터의 경우에는 기본 공격력에 + 1을 해주기 위한 기능
    }

    run = () => { // 오버라이딩 = 부모의 run()을 덮어쓰기 했다
        console.log("날아서 도망가자!")
    } 
}

class 지상몬스터 extends Monster {
    constructor(C) {
        super(C) // 부모의 constructor에 넘겨주기 위해서
    }
    run = () => {
        console.log("뛰어서 도망가자!")
    } 
}

const myMonster1 = new 공중몬스터(20)
myMonster1.attack()
myMonster1.run()

const myMonster2 = new 지상몬스터(50)
myMonster2.attack()
myMonster2.run()