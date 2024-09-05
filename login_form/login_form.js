document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userId = document.getElementById('useridinput').value;
    const password = document.getElementById('passwordinput').value;

    let userIdErrorMsg = document.querySelector('#userid-errorMsg')
    let passwordErrorMsg = document.querySelector('#password-errorMsg')

    let check = true;

    if (!userId) {
      userIdErrorMsg.style.display = 'block';
      document.textForm.userid.focus();
      check = false
    } else {
      userIdErrorMsg.style.display = 'none';
    }

    if (!password) {
      passwordErrorMsg.style.display = 'block';
      document.textForm.password.focus();
      check = false;
    } else {
      userIdErrorMsg.style.display = 'none';
    }



    if (check) {
      const loginData = {
        userId: userId,
        password: password
      }
      const jasonData = JSON.stringify(loginData);

      fetch('http://192.168.0.25:8080/user/login', {
        methd: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jasonData
      })
        .then(res => res.json())
        .then(data => {
          console.log('서버 응답:', data);

        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  });
});



      
      
 
  