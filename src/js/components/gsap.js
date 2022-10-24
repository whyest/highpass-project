import { gsap } from 'gsap';

let tl = gsap.timeline();

tl.from('.page__body', { opacity: 0, duration: 0.5 })
	.from('.header', { opacity: 0, duration: 1 })
	.from('.workshop__left', { opacity: 0, x: '-100%', duration: 0.7 }, '-=0.5')
	.from('.works__item--1', { opacity: 0, y: 100, duration: 0.7 })
	.from('.works__item--2', { opacity: 0, x: 100, duration: 0.5 })
	.from('.works__item--3', { opacity: 0, x: 100, duration: 0.5 })
	.from('.works__title', { opacity: 0, y: 400, duration: 0.5 }, '-=0.5');
