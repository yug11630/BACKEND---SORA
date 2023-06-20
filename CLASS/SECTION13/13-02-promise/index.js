const fetchData = async () => {
  // API 보내기 요청

  // 아래를 axios 라고 가정한다.
  const result = await new Promise((성공함수, 실패함수) => {
    setTimeout(() => {
      try {
        console.log("이미지를 받아왔습니다."); // 5초 뒤에 이미지를 받아온다
        성공함수("강아지.jpg");
      } catch (error) {
        실패함수("실패했습니다.");
      }
    }, 5000);
  });

  console.log(result);
  console.log("받아 온 강아지.jpg를 브라우저에 전달해준다");
};

fetchData();
