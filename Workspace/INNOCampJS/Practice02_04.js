// if와 '?'를 사용한 조건 처리 문제 4 "'if'를 '?'로 교체하기"

/*
조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}
 */

let result;

(a + b < 4) ?
    result = '미만':result = '이상';