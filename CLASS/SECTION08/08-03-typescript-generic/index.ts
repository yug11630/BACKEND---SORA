// 1. 문자 / 숫자 / 불린 기본 타입

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const Primitiveresult = getPrimitive("뀨잉", 123, true);

//

// 2. any 타입 (그냥 자바스크립트랑 같다)
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 모든지 가능하다
  return [arg3, arg2, arg1];
};

const Anyresult = getAny("뀨잉", 123, true);

//

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100);
  return [arg3, arg2, arg1];
};

const Unknownresult = getUnknown("뀨잉", 123, true);

//

// 4. generic 타입
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const Genericresult = getGeneric<string, number, boolean>("뀨잉", 123, true);

//

// 5. generic - 2 타입 (이름은 무관하다는 걸 보여주는 것)
function getGeneric02<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const Genericresult02 = getGeneric02("뀨잉", 123, true);

//

// 6. generic - 3 타입 (화살표 함수)
const getGeneric03 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const Genericresult03 = getGeneric03("뀨잉", 123, true);
