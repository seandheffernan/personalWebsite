function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("dark-body");
	// $('.bg-light').addClass('bg-dark').removeClass('bg-light');
}

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

$('body').on('show.bs.modal', function () {
	$('#sidebar').addClass("fixModal"); 
}); 
$('body').on('hidden.bs.modal', function () { 
	$('#sidebar').removeClass("fixModal"); 
});

$("#slide2Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide2").offset().top
    }, 500);
});
$("#slide3Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide3").offset().top
    }, 500);
});
$("#slide4Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide4").offset().top
    }, 500);
});
$("#slide5Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide5").offset().top
    }, 500);
});
$("#slide6Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide6").offset().top
    }, 500);
});

var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    // delay: 200,
    // reset: true,
    duration: 800,
    opacity: 0
};

var slideRight = {
	distance: '150%',
    origin: 'right',
    opacity: null,
    // delay: 200,
    // reset: true,
    duration: 800,
    // opacity: 0
}

ScrollReveal().reveal('#slide2', slideLeft);
ScrollReveal().reveal('#slide3Content', slideRight);
ScrollReveal().reveal('#slide4', slideLeft);
ScrollReveal().reveal('#slide5', slideRight);
ScrollReveal().reveal('#slide6', slideLeft);