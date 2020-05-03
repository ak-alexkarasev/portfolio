const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.nav__menu_link').click(function(event) {
		$('.nav__menu_link').classList('nav__menu_link-active');
	});
	$('.arrow__image').click(function(){
		$('.modal__form').show(300);      
		return false;
	});
	$('.cross').click(function(){
		$('.modal__form').hide(300);      
		return false;
	});
	$('.submit').click(function(){
		$('.mask').show(300);      
		return false;
	});
	$('.reset').click(function(){
		$('.mask').hide(300);      
		return false;
	});
});
