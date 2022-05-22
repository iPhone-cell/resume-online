
// Гамбургер 
	$('.menu-open').click(function (e) {
		e.preventDefault;
		$(this).toggleClass('menu-open_active');
		$('.menu-collapse').toggleClass('d-none').css('order', '1')
		$('.menu').toggleClass('menu-opened');
	});

//Кабинет
$(document).ready(function() {
    $('.cabinet').click(function() {	
    $('.cabinet_sub').slideToggle();
    });
});


// ----------модульное окно-----
$('.btn-pay').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
    $('#myModal') 
    .css('display', 'block')
    .animate({opacity: 1}, 198);
    });
});

$('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
    $(this).css('display', 'none');
    $('#myOverlay').fadeOut(297);
    });
});