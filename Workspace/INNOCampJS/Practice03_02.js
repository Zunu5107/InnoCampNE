// 배열 문제 2 <배열과 관련된 연산>

/*
배열과 관련된 다섯 가지 연산을 해봅시다.

1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
2. "Rock-n-Roll"을 배열 끝에 추가합니다.
3. 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
4. 배열의 첫 번째 요소를 꺼내서 출력합니다.
5. "Rap"과 "Reggae"를 배열의 앞에 추가합니다.

단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.
1. Jazz, Blues
2. Jazz, Blues, Rock-n-Roll
3. Jazz, Classics, Rock-n-Roll
4. Classics, Rock-n-Roll
5. Rap, Reggae, Classics, Rock-n-Roll

*/

let styles = ["Jazz", "Blues"]; // 1

styles.push("Rock-n-Roll") // 2

styles[ Math.floor(styles.length / 2) ] = "Classics"; // 3 (Math 함수 참조 : https://wdevp.tistory.com/59)

alert(styles.shift()); // 4


styles.unshift("Raggae"); // 5
styles.unshift("Rap");
