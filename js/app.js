
const carouselEl = document.getElementsByClassName('carousel')
console.log(carouselEl)

const btnRightElement = document.getElementById('btn_r')
console.log(btnRightElement)

let functionActiv = 0

btnRightElement.addEventListener( 'click', function() {
    console.log('next right')
    
let firstSlide = carouselEl[functionActiv]
console.log(firstSlide)
firstSlide.classList.toggle('mk_display_active')

functionActiv +=1 

let secondSlide = carouselEl[functionActiv]
console.log(secondSlide)
secondSlide.classList.toggle('mk_display_active')

})