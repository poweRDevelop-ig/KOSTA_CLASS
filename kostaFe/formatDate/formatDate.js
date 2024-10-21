// 날짜를 YY-MM-DD 형식으로 변환하는 함수
export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = String(date.getFullYear()).slice(-2); // YY 형식으로 변환
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 포맷
    const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로 포맷
    return `${year}-${month}-${day}`;
};
