// // 타입 추론 
// let A = "안녕하세요"
// A = 3

// // 타입 명시 
// let B: string = "반갑습니다"
// B = 10

// // 타입 명시가 필요한 상황
// let C: number | string = 1000
// C = "1000원"

// // 숫자 타입
// let D : number = 10
// D = "철수"

// // 불린 타입

// let E = true
// E = false
// E = "true" // true로 작동

// // false의 종류
// // 0
// // "" => " " 은 참이다
// // NaN
// // null
// // undefined

// // 배열타입
// let F: number[] = [1,2,3,4,5,"안녕"]
// let G: string[] = ["아", "이", 3]
// let H: (string | number)[] = ["아", "이", 3]

// // 객체타입

// interface IProfile {
//     name: string
//     age : number | string
//     school : string
//     hobby?: string // ? :  있어도 없어도 상관이 없다는 뜻
// }
// const profile: IProfile = {
//     name : "뀨잉",
//     age : 8,
//     school : "뀨앙초등학교"
// }

// profile.name = "뀨앙"
// profile.age = "8살"
// profile.hobby = "산책"

// // 함수 타입 => 어디서든 몇번이든 호출이 가능하므로 타입 추론 불가 반드시 타입 명시가 필요하다
// function add(num1: number, num2: number, unit: string): string { // return 값의 타입 지정
//     return num1 + num2 + unit
// }

// const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능해진다!

// const add2 = (num1: number, num2: number, unit: string): string => { // return 값의 타입 지정 => 화살표 함수 이용시
//     return num1 + num2 + unit
// }

// const result2 = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능해진다!

// any 타입
let F: any = "철수" // 자바 스크립트와 동일!
F = 3
F = true