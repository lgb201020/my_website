/*
@JS로 웹 조작이 가능한데 조작기능은 크게 두가지가 있다.
1. JS로 웹 브라우저를 조작 가능 => BOM(Browser Object Model)
2. JS로 HTML과 CSS 조작이 가능 => DOM(Document Object Model)

1. BOM(Browser Object Model)
BOM은 뒤로가기, 경고창을 띄우기 등등의 브라우저를 조작할 수 있다.
따라서 브라우저의 기능은 JS로 구현이 가능하다.

2. DOM(Document Object Model)


@웹 조작 순서
1. 대상 선택 
document에서 어떤 것을 조작 할 것인지 정한다.

대상 선택 방법 
1-1. getElementBy~()
1-2. getElementsBy~()
1-3. querySelector~()
위 세가지 이외에도 가계도 측면에서 선택 할 수 있고 byclass, byid와 같이 특정 테그를 이용해 대상을 선택할 수 있다.
예시
document.getElementById("id 이름")

2. 조작
*/