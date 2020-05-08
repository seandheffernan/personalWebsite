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