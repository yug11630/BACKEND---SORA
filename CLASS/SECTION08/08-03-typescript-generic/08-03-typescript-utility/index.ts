interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입
type A = Partial<IProfile>;

// 2. Required 타입
type B = Required<IProfile>;

// 3. Pick 타입
type C = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type D = Omit<IProfile, "school">;

// 5. Record 타입
type E = "뀨잉" | "뀨앙" | "뀨돌"; // Union 타입
let child01: E = "뀨돌"; // 뀨잉, 뀨앙, 뀨돌만 가능
let child02: string = "사과"; // 뀨잉, 뀨앙, 뀨돌, 사과, 바나나 등등 모두 가능

type F = Record<E, IProfile>; // IProfile = 밸류값 // Record 타입

// 6. 객체의 Key들로 Union 타입 만들기
type G = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myProfile: G = "hobby";

// 7. type과 interface의 차이 => interface는 선언 병합 가능
interface IProfile {
  candy: number; // 선언 병합으로 추가 됐다
}

let profile: Partial<IProfile> = {
  candy: 10,
};
