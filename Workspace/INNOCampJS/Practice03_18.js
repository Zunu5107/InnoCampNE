// 반복문 문제 1 <반복문의 마지막 값>

/*아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요? 이유도 함께 설명해보세요.

let i = 3;

while (i) {
  alert( i-- );
}
*/

/*
    정답 : 1

    이유 : i--는 후위연산자이므로 1이 출력이 되고 나서 0으로 바뀌면서 반복문 탈출
 */