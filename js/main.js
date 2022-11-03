const sliderWeb = document.getElementById('slider-web')
const sliderData = document.getElementById('slider-data')
const webBtn = document.getElementById('web-btn')
const dataBtn = document.getElementById('data-btn')

const changeSlide = () => {
	console.log('Hi')
} 

webBtn.addEventListener('click', changeSlide)
dataBtn.addEventListener('click', changeSlide)