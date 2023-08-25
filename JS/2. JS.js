/* 웹 대상 선택과 대상 조작
@JS로 웹 조작이 가능한데 조작기능은 크게 두가지가 있다.
1. JS로 웹 브라우저를 조작 가능 => BOM(Browser Object Model)
2. JS로 HTML과 CSS 조작이 가능 => DOM(Document Object Model)

1. BOM(Browser Object Model)
BOM은 뒤로가기, 경고창을 띄우기 등등의 브라우저를 조작할 수 있는 JS 모델이다.
따라서 브라우저의 기능은 JS로 구현이 가능하다.

2. DOM(Document Object Model)
DOM은 HTM, CSS를 조작할 수 있는 JS 모델이다.

@웹 조작 순서
1. 대상 선택 
document에서 어떤 것을 조작 할 것인지 정한다.

대상 선택 방법 
1-1. getElementBy~()
1-2. getElementsBy~()
1-3. querySelector~()
위 세가지 이외에도 가계도 측면에서 선택 할 수 있고 byclass, byid와 같이 특정 태그를 이용해 대상을 선택할 수 있다.

2. 조작
.inner.html() 등등과 같은 여러 메소드를 사용하여 Document를 조작할 수 있다.

예시1
document.getElementById("id 이름") 
->요소를 선택하는 코드

let elm = document.getElementById("id");
->선택한 요소를 변수에 담음

elm.innerHTML을 출력하면 선택한 요소/ 태그의 내용을 출력
elm.href를 입력하면 "http://~~~~~~~~~~~~~~~~"와 같이 선택한 요소의 href를 출력한다.

elm.innerHTML = "바꾸려는 HTML값"
->선택한 요소의 HTML 내용/ 값을 새로 선언
* JS를 통해 웹에 있는 어떤 요소든 원하는대로 바꿀 수 있고 기존의 웹 코드를 뜯어 고쳐서 새롭게 웹페이지를 만들 수 있다.


예시2
document.getElementsByclassName("gb_d")
->class를 대상으로 선택하면 class 안에 있는 요소들을 list형태로 갖고올 수 있다.

document.getElementsByclassName("gb_d")[0]
-> 아까 선택한 class의 요소들을 원소로 갖는 리스트에서 인덱스가 0인 요소를 갖고온다. 즉 가장 첫번째 요소를 갖고온다.

** id로 선택하면 하나의 요소만을 선택 할 수 있고 class를 선택하면 여러개의 요소를 선택할 수 있다.


예시3
document.queryselector(".~~~")
.(도트)를 붙이면 class를 선언하는 것처럼 querySelector(".~~~")도 class를 선택
*/


/* JS 이벤트
@JS 이벤트
이벤트란 click, scroll, keyboard 입력, loading 등등 JS로 어떤 동작을 하는 것  

이벤트 등록하는 방법
1.inline으로 이벤트 등록
2. addeventlistener를 통해 이벤트 등록 -> 구글링으로 사용에 맞는 함수를 선택
*/


/* HTML 안에서 JS 코드 사용
JS를 사용하는 방법은 script 태그(<script>.....</script>)를 이용해 태그 안에서 JS 코드를 작성 하거나 
<script src ="JS파일 경로"></script>를 통해 JS 파일을 불러서 JS코드를 사용할 수 있다.
*/


