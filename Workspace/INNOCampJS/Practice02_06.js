// switch문 문제 1 ""switch"문을 "if"문으로 변환하기"

/*
"switch"문을 사용해 작성된 아래 코드를 if..else문을 사용한 코드로 변환해 보세요.

switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}

*/

let browser = prompt("","")

if( browser == 'Edge' )
        alert( "Edge를 사용하고 계시네요!" );
else if( browser == 'Chrome')
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
else if( browser == 'Firefox')
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
else if( browser == 'Safari')
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
else if( browser == 'Opera')
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
else
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );