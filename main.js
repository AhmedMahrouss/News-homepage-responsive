let humburger = document.querySelector('.humburger img');
let close = document.querySelector('.responsiveNav img');
let responsiveNav = document.querySelector('.responsiveNav');

humburger.onclick = ()=>{
responsiveNav.style.right='0'
}
close.onclick = ()=>{
    responsiveNav.style.right='-70%'
}