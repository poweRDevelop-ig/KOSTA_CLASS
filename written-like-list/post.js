
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('.table tbody'); // 테이블의 tbody 요소 선택

    // 로컬 스토리지에서 userId 가져오기
    const userId = localStorage.getItem('userId');

    // 데이터를 가져오는 함수
    const fetchData = () => {
        if (!userId) {
            console.error('User ID is not available in local storage.');
            return;
        }

        const url = `http://localhost:8080/carpost/mypage?userId=${userId}`; // 실제 데이터 요청 URL로 변경
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Data:', data);
                updateTable(data); // 테이블 업데이트 함수 호출
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    // 테이블을 업데이트하는 함수
    const updateTable = (data) => {
        tableBody.innerHTML = ''; // 기존 데이터 제거

        data.forEach(item => {
            // 데이터 항목을 테이블의 행으로 변환
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.createdAt}</td>
                <td>${item.carModel}</td>
            `;
            tableBody.appendChild(row); // 테이블에 행 추가
        });
    };

    fetchData(); // 페이지가 로드될 때 데이터 가져오기
});
