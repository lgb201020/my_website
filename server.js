const express = require('express'); //설치한 express 라이브러리를 첨부
const app = express(); //첨부한 라이브러리를 이용해서 새로운 객체를 만듬
const port  = 8080

app.listen(port, function(){
    console.log("listening on port"+port);
}); 
//외부에서 서버에 요청을 보낼 수 있도록 하는 메서드 listen을 사용 
//위 세줄의 코드는 express 를 이용해서 node.js 로 서버를 만들기 위한 기본 코드, 즉 서버 오픈하는 문법 코드



app.get('/pet', function(req, res){
    res.send("반갑습니다. 펫 용품 쇼핑 사이트, 페이지 입니다.");
});
app.get('/beauty', function(req, res){
    res.send('alert("Please, enter your name and password for authentication purposes.")');
});

//* get요청시 html을 응답으로 보내주는 코드
app.get('/', function(req, res){
    res.sendFile(__dirname + '/main_page.html')
});

//서버를 수정할 때마다 계속 서버를 저장/재시작이 번거로움 -> ctrl+s 누르면 자동저장,실행 되는 라이브러리 사용
//main_page 꾸미기

/*
get요청은 요청 정보를 url 즉 주소창에 정보를 넣어 서버로 보내는 방식이다. 따라서 서버는 특정 요청을 받으면 해당 요청에 맞는 응답을 제공한다.
즉 라우팅에 맞는 응답을 보낸다. 웹사이트를 만드는 경우 send()의 파라미터에 위와같이 한글이 아니라 pet용품에 대한 HTML을 넣어서 보내주면 즉 웹페이지에 대한 코드를 보내주면 웹사이트에서의 응답이 된다.
*/