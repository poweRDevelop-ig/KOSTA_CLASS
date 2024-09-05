

function loginForm(){
    if(document.textForm.userid.value == ''){
        alert("아이디를 입력해주세요.");
        document.textForm.userid.focus();
        return false;
    }
    
    let passwd1 =document.textForm.password.value;

    if(passwd1 == ''){
        alert("비밀번호를 입력해주세요.");
        document.textForm.password.focus();
        return false;
    }
    document.textForm.action = '/.jsp';
    document.textForm.submit();
}

function loginForm() {
    // 입력된 아이디와 비밀번호 가져오기
    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
  
    // 비밀번호 암호화 (예시: bcrypt.js 사용)
    // const hashedPassword = bcrypt.hashSync(password, salt);
  
    // 로그인 정보를 JSON 객체로 만들기
    const loginData = {
      userId: userId,
      password: password // 실제로는 hashedPassword를 사용해야 합니다.
    };
  
    // JSON 문자열로 변환
    const jsonData = JSON.stringify(loginData);
  
    // 백엔드로 POST 요청 보내기 (예시: /api/login 엔드포인트)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => response.json())
    .then(data => {
      console.log('서버 응답:', data);
      // 서버에서 받은 응답 처리 (예: 로그인 성공/실패 처리)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // HTML 요소에 이벤트 리스너 추가 (focus 이벤트를 사용하여 placeholder 제거)
  document.getElementById('userid').addEventListener('focus', () => {
    if (document.getElementById('userid').value === '아이디를 입력해주세요.') {
      document.getElementById('userid').value = '';
    }
  });
  
  document.getElementById('password').addEventListener('focus', () => {
    if (document.getElementById('password').value === '비밀번호를 입력해주세요.') {
      document.getElementById('password').value = '';
    }
  });