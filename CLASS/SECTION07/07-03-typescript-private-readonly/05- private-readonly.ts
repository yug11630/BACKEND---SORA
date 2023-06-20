// // public / private / protected / readonly

// class Monster02 {
//     // power = 10 => public / private / protected / readonly 중 하나라도 앞에 붙을 시 생략 가능
    
//     constructor(private readonly power: any) { // constructor = 생성자
//        //  this.power = power => public / private / protected / readonly 중 하나라도 앞에 붙을 시 생략 가능
//     }

//     attack01 = () => {
//         console.log("공격하자!")
//         console.log(`내 공격력은 ${this.power}이야!!!`) //this가 생략되어 있다는 걸 잊지말자 꼭 this를 붙여줘야한다. => 안에서 접근 가능
//         this.power = 30 // => 안에서 수정 불가
//     }
// }

// class 공중몬스터02 extends Monster02 {
//     attack02 = () => {
//         console.log("공격하자!")
//         console.log(`내 공격력은 ${this.power}이야!!!`) //this가 생략되어 있다는 걸 잊지말자 꼭 this를 붙여줘야한다.
//         this.power = 30 // 자식은 접근 불가 / 수정 불가
//     }
// }

// const Monster15 = new 공중몬스터02(20)
// Monster15.attack01()
// Monster15.attack02()
// console.log(Monster15.power) // 밖에서 접근 불가
// Monster15.power = 10 // 밖에서 수정 불가
