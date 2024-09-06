document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const userId = document.getElementById('membership_id').value;
        const password = document.getElementById('membership_pw').value;
        const passwordConfirm = document.getElementById('membership_pw2').value;
        const userName = document.getElementById('membership_name').value;
        const email = document.getElementById('membership_email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const fileInput = document.getElementById('profileImage'); 
        const selectedFile = fileInput.files[0];
        const userState = document.querySelector('input[name="userState"]:checked');

        let check = true;

        // 유효성 검사
        // ...

        if (check) {
            const reader = new FileReader();
            reader.onloadend = function () {
                const base64Image = reader.result;
                
                const userData = {
                    userId,
                    password,
                    userName,
                    email,
                    phoneNumber,
                    userState: userState.value,
                    userImagesURL: base64Image // Base64로 인코딩된 이미지
                };

                fetch('http://192.168.0.25:8080/user/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('서버 응답:', data);
                    if (data.userId) { 
                        alert(`회원가입이 완료 되었습니다.\n 아이디 : ${userId}`);
                    } else {
                        alert('회원가입 실패: ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            };
            
            reader.readAsDataURL(selectedFile);
        }
    });
});
