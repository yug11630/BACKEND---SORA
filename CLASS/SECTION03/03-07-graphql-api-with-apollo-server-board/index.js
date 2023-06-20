import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone' // app.listen 동일

const typeDefs = `#graphql
    type MyResult {
        number : Int
        writer : String
        title : String
        contents : String

    }

    input createBoardInput {
        writer : String
        title : String
        contents : String
    }

    type Query {
        fetchBoards : [MyResult] #배열 안에 객체 1개 이상을 의미!
    }

    type Mutation {
        #createBoard(writer : String, title : String,  contents : String!) : String
        createBoard(createBoardInput : createBoardInput!) : String
    }
`

const resolvers = {
    Query : {
        fetchBoards : (parent, args, context, info) => {
            // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다 가정
            const result = [
                { number : 1, writer : "뀨잉", title : "뀨잉이 등장~", contents : "하이하이"},
                { number : 2, writer : "뀨앙", title : "뀨앙이도 등장~", contents : "ㅋㅋ"},
                { number : 3, writer : "뀨돌", title : "뀨돌이는 안 등장~", contents : "ㅠㅠ"},
            ]
            
            // 2. DB에서 꺼내 온 결과를 브라우저에 응답 (response)
            return result
        }
    },

    Mutation : {
        createBoard : (_, args) => {
           // 1. 브라우저에서 보낸 데이터 확인
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            // 2. DB 접속 후 데이터 저장 => 데이터 저장했다 가정

            // 3. DB에 저장된 결과를 브라우저에 응답 (response)
            return "게시물 등록에 성공하였습니다."
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers, // 키와 밸류가 같을 경우 생략 가능
    // cors : {origin : [주소] } => 특정 사이트만 지정하고 싶을 때
    cors : true // 모든 사이트 허용하고 싶을 때
})

startStandaloneServer(server)