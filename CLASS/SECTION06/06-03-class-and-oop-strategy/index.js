class 공중부품 {
    run = () => {
        console.log("날아서 도망가자!!")
    }
}

class 지상부품 {
    run = () => {
        console.log("뛰어서 도망가자!!")
    }
}

class Monster {
    power = 10
    A;

    constructor(부품){
        this.A = 부품
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + "야!")
    }

    run = () => {
        this.A.run()
    }
}

const mymonster1 = new Monster(new 공중부품())
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(new 지상부품())
mymonster2.attack()
mymonster2.run()