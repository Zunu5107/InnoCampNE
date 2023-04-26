// 반복문 문제 5 <사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기>

/*사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요.
사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.

사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우,
혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다.
숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다
*/


while(1){
    let a = prompt("Please enter a number greater than 100", "");
    if(a == null || +a > 100 || a == "")
        break;
}