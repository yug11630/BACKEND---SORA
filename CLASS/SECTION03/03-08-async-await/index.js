import axios from "axios"

// 1. 비동기방식
function fetchAsync() {
    const result = axios.get("https:koreanjson.com/posts/1")
    console.log("비동기 방식 : ", result) // Promise { <pending> }
}

fetchAsync()

// 2. 동기방식
// async function fetchSync() { => 함수 중복 선언의 위험이 있는 구문 화살표 함수로 변경하자
//     const result = await axios.get("https:koreanjson.com/posts/1")
//     console.log("동기 방식 : ", result) // 실제 정상 데이터
//     console.log("동기 방식 : ", result.data.title)
// }

    const fetchSync = async () => {
    const result = await axios.get("https:koreanjson.com/posts/1")
    console.log("동기 방식 : ", result) // 실제 정상 데이터
    console.log("동기 방식 : ", result.data.title)
}


fetchSync()