// 1. 한 개 테스트하기

it('더하기 테스트', () => {
  const a = 1;
  const b = 2;

  expect(a + b).toBe(3);
});

// 2. 여러 개 묶음으로 테스트하기
describe('나의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a + b).toBe(3);
  });

  it('곱하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a * b).toBe(2);
  });
});

// 3. 상품구매하기 테스트
describe('상품구매테스트', () => {
  // beforeAll(() => {}); // 모든 it들 실행하기 전에 딱 1번 실행(예, 로그인 등)
  // beforeEach(() => {}); // 각각의 it들 실행하기 전에 매번 실행하고 초기화를 반복

  //   beforeAll(() => {}); // 모든 it들을 실행하기 전에 딱 한 번 실행한다. ex) 로그인 등
  //   beforeEach(() => {}); // 각각의 it들을 실행하기 전에 매번 실행한다. ex) 초기값 설정

  it('돈 검증하기', () => {
    const result = true; // 돈이 충분하다 가정한다.
    expect(result).toBe(true);
  });

  it('상품 구매하기', () => {
    const result = true; // 상품을 구매했다 가정한다.
    expect(result).toBe(true);
  });
});
