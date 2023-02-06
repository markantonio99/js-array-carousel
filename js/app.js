
const carouselEl = document.getElementsByClassName('carousel')
console.log(carouselEl)

const btnRightElement = document.getElementById('btn_r')
console.log(btnRightElement)

btnRightElement.addEventListener( 'click', function() {
    console.log('next right')
    
let firstSlide = carouselEl[0]
console.log(firstSlide)
firstSlide.classList.remove('mk_display_active')


let secondSlide = carouselEl[1]
console.log(secondSlide)
secondSlide.classList.add('mk_display_active')

})