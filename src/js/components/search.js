import { gsap } from 'gsap';

const searchOpenBtn = document.querySelector('.js-search-btn');
const searchCloseBtn = document.querySelector('.js-search-close');

const searchTl = gsap.timeline({
	paused: true,
	onReverseComplete() {
		searchOpenBtn.disabled = false;
	},
	onStart() {
		searchOpenBtn.disabled = true;
	},
});

searchTl
	.fromTo(
		'.js-form',
		{ display: 'none', opacity: 0 },
		{ display: 'flex', opacity: 1, duration: 0.3 }
	)
	.fromTo('.js-input', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, '<')
	.fromTo(
		'.header__nav',
		{ opaciy: 1 },
		{ display: 'none', opacity: 0, duration: 0.5 },
		'<'
	)
	.fromTo(
		'.logo',
		{ opaciy: 1 },
		{ display: 'none', opacity: 0, duration: 0.5 },
		'<'
	);

searchOpenBtn.addEventListener('click', () => {
	searchTl.play();
});

searchCloseBtn.addEventListener('click', () => {
	searchTl.reverse();
});
