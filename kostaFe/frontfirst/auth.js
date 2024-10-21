// auth.js

const checkUserLogin = () => {
    const userId = localStorage.getItem('userId');
    const userState = localStorage.getItem('userState');
    const signUpLi = document.querySelector('nav.main-nav li:has(a[href*="signup_form"])');
    const loginLi = document.querySelector('nav.main-nav li:has(a[href*="login_form"])');
    const writePostLi = document.querySelector('nav.main-nav li:has(a[href*="write"])');
    const myPostsLi = document.querySelector('nav.main-nav li:has(#myPostLink)');
    const likedPostsLi = document.querySelector('nav.main-nav li:has(#likesPostLink)');
    const logOutLi = document.querySelector('nav.main-nav li:has(#logoutLink)');

    if (userId) {
        // 로그인 상태인 경우
        signUpLi.style.display = 'none';
        loginLi.style.display = 'none';
        writePostLi.style.display = 'list-item';
        logOutLi.style.display = 'list-item';

        if (userState === '구매자') {
            likedPostsLi.style.display = 'list-item';
            myPostsLi.style.display = 'none';
        } else {
            likedPostsLi.style.display = 'none';
            myPostsLi.style.display = 'list-item';
        }
    } else {
        // 비로그인 상태인 경우
        signUpLi.style.display = 'list-item';
        loginLi.style.display = 'list-item';
        writePostLi.style.display = 'none';
        myPostsLi.style.display = 'none';
        likedPostsLi.style.display = 'none';
        logOutLi.style.display = 'none';
    }
};

// 페이지 로드 시 로그인 상태 확인
document.addEventListener('DOMContentLoaded', () => {
    checkUserLogin();
});