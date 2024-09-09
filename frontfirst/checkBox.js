document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.accordion input[type="checkbox"]');
    const selectedFilters = {
        brands: [],
        carTypes: [],
        displacements: [],
        colors: [],
        modelYears: []
    };

    // 체크박스 상태 변경 시 실행되는 이벤트 리스너
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            updateSelectedFilters();
            resetAndFetchData();
        });
    });

    function updateSelectedFilters() {
        selectedFilters.brands = Array.from(document.querySelectorAll('.accordion input[data-car-brand]:checked'))
                                      .map(cb => cb.dataset.carBrand)
                                      .filter(value => value.trim() !== '');
        selectedFilters.carTypes = Array.from(document.querySelectorAll('.accordion input[data-car-Typeld]:checked'))
                                        .map(cb => cb.dataset.carTypeld)
                                        .filter(value => value.trim() !== '');
        selectedFilters.displacements = Array.from(document.querySelectorAll('.accordion input[data-car-displacement]:checked'))
                                             .map(cb => cb.dataset.carDisplacement)
                                             .filter(value => value.trim() !== '');
        selectedFilters.colors = Array.from(document.querySelectorAll('.accordion input[data-car-color]:checked'))
                                      .map(cb => cb.dataset.carColor)
                                      .filter(value => value.trim() !== '');
        selectedFilters.modelYears = Array.from(document.querySelectorAll('.accordion input[data-car-modelYear]:checked'))
                                         .map(cb => cb.dataset.carModelYear)
                                         .filter(value => value.trim() !== '');
    }

    function fetchFilteredData(limit, offset) {
        const params = new URLSearchParams();

        // 필터 값이 있는 경우만 파라미터에 추가
        if (selectedFilters.brands.length > 0) {
            params.append('brand', selectedFilters.brands.join(','));
        }
        if (selectedFilters.carTypes.length > 0) {
            params.append('carType', selectedFilters.carTypes.join(','));
        }
        if (selectedFilters.displacements.length > 0) {
            params.append('displacement', selectedFilters.displacements.join(','));
        }
        if (selectedFilters.colors.length > 0) {
            params.append('color', selectedFilters.colors.join(','));
        }
        if (selectedFilters.modelYears.length > 0) {
            params.append('carYear', selectedFilters.modelYears.join(','));
        }

        // limit과 offset은 항상 포함
        params.append('limit', limit);
        params.append('offset', offset);

        return fetch(`http://localhost:8080/carpost/filter?${params.toString()}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => {
            console.error('서버 오류:', error);
            return []; // 빈 배열을 반환하여 에러 처리
        });
    }

    function loadData(limit, offset) {
        return fetchFilteredData(limit, offset)
            .then(data => {
                // 데이터가 있을 경우 페이지에 추가
                const section = document.querySelector('#main-section');
                data.forEach(car => {
                    const carDiv = document.createElement('div');
                    carDiv.className = 'car-icons';

                    // 차량 이미지 추가
                    const carHolder = document.createElement('div');
                    carHolder.className = 'car-holder';
                    const img = document.createElement('img');
                    img.src = car.carImagesURL; // 차량 객체에 imageURL 속성이 있다고 가정
                    carHolder.appendChild(img);

                    // 차량 상세 정보 추가
                    const textDiv = document.createElement('div');
                    textDiv.className = 'text';
                    const carTitle = document.createElement('div');
                    carTitle.className = 'car1';
                    carTitle.textContent = car.title; // 차량 객체에 title 속성이 있다고 가정
                    textDiv.appendChild(carTitle);

                    // 차량 상세 정보 테이블 생성
                    const table = document.createElement('table');
                    table.className = 'car_table';
                    const tbody = document.createElement('tbody');

                    const details = [
                        { label: '차 종 :', value: car.carType },
                        { label: '연 식 :', value: car.carYear },
                        { label: '가 격 :', value: car.price },
                        { label: '총 km 수 :', value: car.mileage },
                        { label: '배 기 량 :', value: car.displacement }
                    ];

                    details.forEach(detail => {
                        const tr = document.createElement('tr');
                        const tdLabel = document.createElement('td');
                        tdLabel.textContent = detail.label;
                        const tdValue = document.createElement('td');
                        const spanValue = document.createElement('span');
                        spanValue.textContent = detail.value;
                        tdValue.appendChild(spanValue);
                        tr.appendChild(tdLabel);
                        tr.appendChild(tdValue);
                        tbody.appendChild(tr);
                    });

                    table.appendChild(tbody);
                    textDiv.appendChild(table);

                    // 좋아요 아이콘 추가
                    const iconFooter = document.createElement('div');
                    iconFooter.className = 'icon-footer';
                    const sellerDiv = document.createElement('div');
                    sellerDiv.textContent = `판매자 : ${car.userId}`; // 차량 객체에 seller 속성이 있다고 가정
                    iconFooter.appendChild(sellerDiv);

                    const likeDiv = document.createElement('div');
                    likeDiv.className = 'like';
                    likeDiv.dataset.likeCount = car.likes; // 차량 객체에 likes 속성이 있다고 가정
                    likeDiv.innerHTML = `<i class="fa-solid fa-heart"></i> ${car.likes}`;
                    iconFooter.appendChild(likeDiv);

                    carDiv.appendChild(carHolder);
                    carDiv.appendChild(textDiv);
                    carDiv.appendChild(iconFooter);

                    section.appendChild(carDiv);
                });

                // 오프셋을 업데이트
                offset += limit;
            });
    }

    // 무한 스크롤 구현
    let offset = 0;
    const limit = 10;

    function resetAndFetchData() {
        offset = 0; // 오프셋을 초기화
        document.querySelector('#main-section').innerHTML = ''; // 기존 콘텐츠를 제거
        loadData(limit, offset); // 데이터 로드
    }

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            loadData(limit, offset); // 추가 데이터 로드
        }
    });

    // 초기 데이터 로드
    loadData(limit, offset);
});
