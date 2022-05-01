const connectEl=document.querySelector('.connect')
const nestedListEl=document.querySelector('.nested-list')
const nestDropdown=document.querySelector('.nest-dropdown')
const menu=document.querySelector('#mobile_menu')
const menuDiv=document.querySelector('.navbar-list__div')
const section1Img=document.querySelector('.section1-img')
const section3Img=document.querySelector('.section3-img')
let x= window.matchMedia("(max-width: 600px)")


if (x.matches) {
 section1Img.src="dist/images/illustration-editor-mobile.svg"
 section3Img.src="dist/images/illustration-laptop-mobile.svg"
 
}

nestDropdown.addEventListener('click', function (params) {
 connectEl.classList.toggle('active');
 nestedListEl.classList.toggle('active');
})

menu.addEventListener('click', function (params) {
 menu.classList.toggle('is-active')
 menuDiv.classList.toggle('is-active')
})


