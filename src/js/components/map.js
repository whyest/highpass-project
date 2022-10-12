let center = [55.76953456898229, 37.63998549999998];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 14,
	});

	let placemark = new ymaps.Placemark(
		center,
		{},
		{
			iconLayout: 'default#image',
			iconImageHref: '../img/placemark.png',
			iconImageSize: [12, 12],
			iconImageOffset: [-20, 2],
		}
	);

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
}

ymaps.ready(init);

// Hide address
const contactsAdress = document.querySelector('.address');
const contactsBurger = document.querySelector('.address__btn');
const contactsMap = document.getElementById('map');

contactsBurger.addEventListener('click', () => {
	contactsAdress.classList.add('is-hidden');

	contactsMap.addEventListener('click', () => {
		contactsAdress.classList.remove('is-hidden');
	});
});
