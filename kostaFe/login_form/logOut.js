// logout.js

document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logoutLink');

    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작 방지

            // 로컬스토리지에서 관련 데이터 삭제
            localStorage.removeItem('userId'); // 'userData'는 실제 저장된 데이터에 맞게 조정
            localStorage.removeItem('userState'); // 'userData'는 실제 저장된 데이터에 맞게 조정

            // 페이지 리디렉션
            window.location.href = 'http://localhost:63342/kostaFe/frontfirst/frontfirst2.html';
        });
    }
});
