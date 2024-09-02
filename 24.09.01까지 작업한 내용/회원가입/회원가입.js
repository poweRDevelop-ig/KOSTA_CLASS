
const onRegister = ()=>{
    // user가 쓴 글자를 받아와야한다.
    let emailInput = document.querySelector('#email');
    // 사용자가 email input태그에 입력한 값은
    // emailInput.value에 들어있다

    let userNameInput = document.querySelector('#username');
    // userNameInput.value에
    let passwordInput = document.querySelector('#password');

    let passwordCheckInput = document.querySelector('#password-check');

    // check에는 true가 들어있다
    let check = true;

    // 정말로 value번째 방에있는 값들이 잘 들어왔는지 콘솔창으로 확인하가
    // console.log(emailInput.value);
    // console.log(userNameInput.value);
    // console.log(passwordInput.value);
    // console.log(passwordCheckInput.value);
    let emailErrMsg = document.querySelector('#email-err-msg');

    // 이메일 입력 여부
    if(emailInput.value === ''){    // 이메일을 입력하지 않았다는 소리
        // emailInput.value === '' 가 true 일때 실행되는 공간
        emailErrMsg.style.display = 'block';
        check = false;
    }else{  // 이메일이 입력 되었다는 소리(위의 if문 조건이 false일때)
        emailErrMsg.style.display = 'none';
    }

    // 이름 입력 여부
    let userNameErrMsg = document.querySelector('#username-err-msg');
    if(userNameInput.value === ''){
        userNameErrMsg.style.display = 'block';
        check = false;
    }else{
        userNameErrMsg.style.display = 'none';
    }

    // 비밀번호 입력 여부
    let passwordErrMsg = document.querySelector('#password-err-msg');
    if(passwordInput.value === ''){
        passwordErrMsg.style.display = 'block';
        check = false;
    }else{
        passwordErrMsg.style.display = 'none';
    }

    // 비밀번호 확인 입력 여부
    let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
    if(passwordCheckInput.value === ''){
        passwordCheckErrMsg.textContent = '비밀번호 확인은 필수 입력값입니다.'
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    }else if(passwordCheckInput.value !== passwordInput.value){
        // console.log('여기 실행됨'); 실행이 안될때 어디까지 들어왔는지 확인하면서...
        passwordCheckErrMsg.textContent = '비밀번호에 입력된 값과 다릅니다.';
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    }else{
        passwordCheckErrMsg.style.display = 'none';
    }

    //  if 영역으로 한번도 들어간적이 없다면(모든 값으로 정상적으로 입력되었다는 소리) 회원가입 성공!! 
    if(check){
        //  모달창을 보여줘
        alert('회원가입이 성공했습니다!');
    }
}