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

$("#slide1Nav").click(function() {
    $('html, body').animate({
        scrollTop: $("#slide1").offset().top
    }, 500);
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