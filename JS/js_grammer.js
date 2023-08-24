/*
JS는 다양한 모듈을 통해 web, app, server개발이 모두 가능한 언어이다.
node.js -> server 개발, front-end 개발
react native -> android, iOS app 모두 개발
elactron -> pc에서 작동하는 app 개발

@JS로 web개발
HTML은 웹의 뼈대를 구성, CSS는 웹의 피부라고 할 때 JS는 웹의 신경계라고 할 수 있다.
즉 HTML, CSS로 마크업(모양, 눈에 보이는 형태)을 하고 JS로 논리 설계를 한다.

@JS문법 - 변수
*변수는 data를 담는 개념으로 JS에서 변수 선언은 총 세가지 방법이 有
var 변수명 -> var data = 1 
let 변수명 -> let data = 2
const 변수명 -> const data = 3
이렇게 앞에 특정 명령어를 써서 변수를 선언 하는 것을 호이스팅이라고 한다.

이때 변수선언의 특징이 있다. var은 변수선언이 자유롭다. 하지만 let과 const는 변수선언이 자유롭지 않다.
즉 var data = 1이라 선언한 것을 뒤에서 var data = 5 로 다시 선언해서 쓸 수 있다. 하지만 const data = 1을 뒤에서 const data = 5로 다시 선언할 수 없다. 이는 let도 마찬가지이다. 
따라서 var은 선언이 자유롭지만 let과 const의 경우 변수를 고정! 시키는 것이기 때문에 앞에서 선언한 것을 뒤에서 다시 선언 할 수 없다.

var d = {"file type": "JSON"}
let a = 1
const t = 2
let a = 7
const t = 100
-> let a, const t 때문에 오류 발생

*일반적으로 let을 변수 선언할 때 많이 사용한다.
*/

/*
@JS문법 - 함수
* JS애서 함수 정의는 명령어만 다를 뿐 문법은 파이썬과 동일하다.

1. f(x) = 2x + 3이라는 함수를 JS로 정의하기

function f(x) {
    let temp = 2*x + 3
    return temp
}

2. f(x,y) = x + y라는 함수를 JS로 정의하기

function f(x,y) {
    let temp = x + y
    return temp
}

3. 입출력이 둘다 없는 함수

function fly() {
    openWings();
    while (true) {
        moveWings();
    }
}
*입력값과 출력값이 모두 없는 형태로 입력을 받아서 처리를 하고 출력을 내지 않아도 자체적으로 코드를 묶어주기 위해 사용한다.
*즉 함수는 코드를 묶어주는 것이다; 
추가적으로 js에서 세미콜론(;)은 코드를 나눠주는 역활을 하지만 반드시 찍어야 하는 것은 아니다. 하지만 코드 끝에 세미콜론을 찍어주는 것이 일반적이다.

*/