function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("dark-body");
	// $('.bg-light').addClass('bg-dark').removeClass('bg-light');
}

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});
