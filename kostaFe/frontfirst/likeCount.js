// likeModule.js

// 좋아요 버튼 생성 함수
export const createLikeButton = (car, onLikeStatusChange) => {
    const likeDiv = document.createElement('div');
    likeDiv.className = 'like';
    likeDiv.dataset.likeCount = car.likes; // 차량 객체에 likes 속성이 있다고 가정
    likeDiv.dataset.isLiked = car.isLiked || 'false'; // 차량 객체에 isLiked 속성이 있다고 가정
    likeDiv.innerHTML = `<i class="fa-solid fa-heart"></i> ${car.likes}`;

    likeDiv.addEventListener('click', () => {
        const isLiked = likeDiv.dataset.isLiked === 'true';
        const currentUserId = localStorage.getItem('userId'); // 로컬 스토리지에서 userId 가져오기

        if (!currentUserId) {
            console.error('User is not logged in');
            return;
        }

        const url = `http://localhost:8080/likes`;
        const requestOptions = {
            method: isLiked ? 'DELETE' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: car.id, // 차량 객체에 id 속성이 있다고 가정
                userId: currentUserId
            })
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                likeDiv.dataset.isLiked = !isLiked; // Toggle liked status
                likeDiv.dataset.likeCount = data.newLikeCount;
                likeDiv.innerHTML = `<i class="fa-solid fa-heart"></i> ${data.newLikeCount}`;
                if (onLikeStatusChange) {
                    onLikeStatusChange(car.id, data.newLikeCount, !isLiked);
                }
            })
            .catch(error => {
                console.error('좋아요 처리 중 오류 발생:', error);
            });
    });

    return likeDiv;
};
