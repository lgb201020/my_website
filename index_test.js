const express = require('express')
const app = express()
const port = 3000
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send({'sound':'강아지'})
})
  //이처럼 json형태로 send에 입력할 수 있고 좀더 명시적으로 쓴다면 res.json({'sound':'강아지'})으로도 쓸 수 있다.

app.get('/cat', (req, res) => {
  res.send('고양이')
})

/*
만약에 youtube 와 같이 사용자가 몇 억 단위의 경우 각각 전부 라우팅을 쓸 수 없기 때문에 라우팅 params를 변수로 놓고 get함수 하나를 쓰고 거기에 변수만 바꿔서 
코드를 여러개 쓰느게 아니라 하나의 코드에 변수를 바꿔가며 사용한다. 이때 params와 query 두가지 방식이 있다.
*/
//@ 1. params 방식 
app.get('/user/:id', (req, res) => { // 라우터에 /user/:변수 이름 형식으로 변수를 라우터에 넣는다. 이때 콜론(:)을 반드시 써야한다.
    const q = req.params // 변수 q를 선언하고 q에 request로 받은 params를 value로 넣는다. -> 라우팅에 /user/google이라고 쓰면 id변수는 google이 됨 
    res.send({'userid' : q.id}) //q변수의 id속성을 출력
  })

//@ 2. query 방식
app.get('/cat', (req, res) => {
    const q = req.query
    res.send({"user_id" : q.q, "user_name" : q.name, "user_age":q.age})
  })

/*
구글에 뭔가를 검색하면 "google.com/search?q=검색어" 이와같이 쓰여진다. 이처럼 쿼리는 key값, value값으로 나눠져있고 지금같은 검색의 경우 key는 q, value는 검색어가 된다.
뿐만 아니라 key1=value1&key2=value2......와 같이 여러개의 파라미터를 커리로 보낼 수 있다. 
쿼리로 front-end에서 back-end로 요청을 보낼때는 /?key=value와 같이 라우팅을 써줘야한다. -> json형태로 data를 back-end로 보냄
*/
app.get('/sound/:name', (req, res) => {
    const p = req.params
    p.name //p.name으로 p의 속성 중 name을 써서 입력받은 값을 불러옴 -> 값을 단순 변수가 아닌 json에 맞는 형태의 변수로 값을 받아 불러올 수 있다.
    const { name } = req.params //이렇게 쓰면 {"name" :"강아지"}에서 이 강아지가 name이라는 변수에 바로 들어가서 굳이 p.name과 같이 속성을 호출하는 방식이 아니라 name변수 하나가 된다.
    console.log(name)
    if(name == dog) {
        res.json({'sound':'강아지'})
    }
    else if(name == cat){
        res.json({'sound':'야옹'})
    }
    else if(name == pig){
        res.json({'sound':'꿀꿀'})
    }
    else{
        res.json({'sound':'알수없음'})
    }

})
//*위 코드는 동물 소리 api서버에 대한 것이다.



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
/*
각 pc마다 ip가 존재하고 그 ip로 내 pc에 접속이 가능, localhost는 ip를 써서 접속하는 것 대신에 써서 접속하는 거라고 보면 된다.
app.get('/',()=>{})에서 app.get은 HTTP 메소드, '/'는 라우팅, ()=>{}는 콜백함수이다.

@HTTP 메소드는 front-end에서 어떠한 요청을 할 때 요청의 종류나 목적을 알려주기 위해 사용되는 수단 - get요청, post요청 두가지가 有
get방식은 주소창에서 데이터를 넘기는 방식
post방식은 주소창이 아니라 내부적으로 body에 정보를 담아서 넘기는 방식

app.get: HTTP 메소드 중에 get방식으로 들어온 요청을 받겠다 -> 즉 get방식으로 보낸 요청은 app.get으로 받아 받은 정보에 대해 get방식 안에서 처리

@라우팅은 서버에 들어갈 때 한 서버에 여러개의 포트가 있듯이 한 포트 내에도 여러개의 파일이 有 
-> 라우팅은 https://www.youtube.com/watch?v=Tt_tKhhhJqY&t=11s와 같이 /watch?v=Tt_tKhhhJqY&t=11s를 라우팅이라고 한다. 간단하게 서버의 포트 내 폴더나 파일 이름정도로 보면 된다. 근데 그렇다고 실제로 폴더나 파일이 있는거는 아니다.

@콜백함수: 다른코드의 인수로서 넘겨주는 실해 가능한 코드
setTimeout(()=>{console.log("1초 지남")}, 1000) 이 코드를 예로 들자면 setTimeout함수가 실행되어서 1000ms 뒤에 ()=>{console.log("hello")}이와 같은 함수가 실행된다는 코드이다.
즉 setTimeout함수가 다 실행되고 나서 ()=>{console.log("hello")} 함수가 실행될때 나중에 실행된 함수를 콜백함수라고 한다.
보통 함수의 실행 순서를 조정할 때 callback function을 쓴다.


app.get('/', (req, res) => {
  res.send('Hello World!')
})
get요청을 받아 라우팅(/)으로 들어와서 (req, res)를 파라미터로 받는 함수가 실행되고 이후에 res에 send함수를 실행해서 나온 결과를 담아 보냄을 의미   
send에는 문자, 딕셔너리, 링크 등등이 들어갈 수 있다. 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
port로 들어와서 console.log() 함수 실행
*/ 