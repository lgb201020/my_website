/* API 개념
@API(Aplication Programming Interface)
앱이 프로그래밍 언어로 상호작용 할 때의 규칙,\
다시 말하자면 front-end에서 필요한 정보를 request를 통해 back-end로 전송, back-end에서 request에 대한 정보들을 연산, 정리, 처리를 하여 response를 front-end로 전송
이게 API이다. 

@open api
back-end에 어떠한 기능을 구현해 놓고 api를 통해 공개를 해 놓으면 이를 open api라고 한다. open api를 통해 우리는 back-end에 구현되어있는 다양한 기능/정보들을 사용가능 

@api 가이드
open api에는 api를 사용하기 위한 규칙들이 있고 이를 공개해 놓고있다. 

예시: 검색 api

Request                                          Response
1. 주소: back-end의 주소                          1. 형식: JSON
2. 전송 방식: get/post                            2. 응답 의미 설명
3. request시 보낼 것들                                 title: 도서 제목
    query: 검색어 등등(필수)                           contents: 도서 소개
    sort: 정렬 방식(선택)                              thumnail: 도서 표지 이미지 URL
    target: 검색 대상(선택)


**public api 사이트 https://github.com/public-apis/public-apis, https://github.com/dl0312/open-apis-korea
*/

/* Ajax
@Ajax란?
보통 웹사이트에서 정보를 요청시 브라우저가 새로고침 되면서 정보를 갖고 페이지가 업데이트 되는데 Ajax를 이용하면 페이지 새로고침 없이 정보만 업데이트 되는 기능을 제공한다.

@Ajax 요청 방법
1. XMLHttpRequest - 옛날 방식(지금은 안씀)
2.jquery Ajax(19년~22년까지의 표준)
3. fetch - 현재 최신표준

@fetch로 Ajax 요청
fetch는 js로 작성되며 정보를 받아 태그로 넣어 front-end에 띄우는 형식은 다음과 같다.
fetch("backend 주소")
.then((response)=>response.json())
.then((data)=> {대상 선택후 대상의 값을 api로 받은 정보로 다시 선언});
*fetch 함수를 써서 back-end에 연결하고 .then을 통해 json파일 형태로 정보를 받는다. 그리고 받은 데이터를 태그 정보를 다시 선언하여 front-end에 보이도록 한다.
? 이 방식은 get 방식을 통한 api 요청이고 post방식을 통한 api 요청 방법도 있다.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>오늘의 강릉 날씨</h1>
    <button onclick="getweather()">날씨 가져오기</button>
    <p1 id="temperature"></p1>
    <script>
        function getweather() {
            fetch("https://goweather.herokuapp.com/weather/jeonju")
            .then((response)=>response.json())
            .then((data)=> {
                document.getElementById("temperature").innerHTML = data["temperature"].toString
            });
        }
    </script>
</body>
</html>
*/