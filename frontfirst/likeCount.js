let likeCount = 0;
                
const likeButton = document.querySelector('.like');

likeButton.addEventListener('click', () => {
    likeCount++;
    updateLikeCount();
});

function updateLikeCount() {
    const likeCountDisplay = document.querySelector('.like-count');
    likeCountDisplay.textContent = `    ${likeCount} `;
    likeCountDisplay.style.color = 'red';
}