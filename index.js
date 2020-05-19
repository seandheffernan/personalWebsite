window.onload = function() {
	var x = document.getElementsByClassName("slide3Intro");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "I am currently an undergraduate at Rensselaer Poytechnic Institute, dual majoring in Computer Science and Information Technology/Web Science, looking to concentrate in Systems and Software and Web Technologies respectively. <br><br> <strong> Current GPA: 3.73<br> Estimated Time of Graduation: Spring 2022</strong>";
	}
	x = document.getElementsByClassName("dataStructuresTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Data Structures<h6>Primary Language: C++</h6>";
	}
	x = document.getElementsByClassName("dataStructuresDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Developed strong problem solving skills by constructing complete C++ programs based around real-world problems. <br> Analyzed the performance of algorithms and data structures, allowing for the designing of efficient customized data structures.<br>";
	}
	x = document.getElementsByClassName("compOrgTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Computer Organization<h6>Primary Languages: C & Assembly</h6>";
	}
	x = document.getElementsByClassName("compOrgDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Learned the Assembly Language, including instruction formats, instruction types, flow of control, and the assembly process.<br>Applied concepts of multi-cycle and pipelined data path and control to design more efficient programs<br>Heavy emphasis on systems and low-level programming, including digital logic such as Boolean algebra, logic circuits, and gates.";
	}
	x = document.getElementsByClassName("focsTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Foundations of Computer Science";
	}
	x = document.getElementsByClassName("focsDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Course about discrete mathematics and computation theory.<br>Formulated mathematical proofs by using logic and the application of mathematical tools such as induction and recursion. <br>Calculated combinational arguments and developed formal methods of computation.";
	}
	x = document.getElementsByClassName("algoTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Introduction to Algorithms"
	}
	x = document.getElementsByClassName("algoDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Analyzed the runtime and efficiency of different algorithms.<br>Utilized different algorithm-design techniques, including, but not limited to, greedy, divide-and-conquer, and dynamic programming techniques, in order to solve particular problems. <br>Modeled real problems abstractly using the language of graphs and flows.<br>Solved problems by reducing to other problems whose solutions are known, as well as show that problems are hard by reducing from other problems.<br>";
	}
	x = document.getElementsByClassName("introITWSTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Introduction to Information Technology and Web Science <h6>Primary Languages: HTML5, CSS3, JavaScript, AMP Stack</h6>";
	}
	x = document.getElementsByClassName("introITWSDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Analyzed business cases and gained the ability to describe important technologies important to the Information Technology Profession along with major applications in the field of Computer and Web Science. <br>Learned and applied the basic concepts of front-end and back-end development, allowing for the creation of simple web pages and databases. <br>";
	}
	x = document.getElementsByClassName("webSysTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Web Systems Development<h6>Primary Languages: HTML5, CSS3, JavaScript, AMP Stack</h6>";
	}
	x = document.getElementsByClassName("webSysDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Refined my knowledge of front-end and back-end development, allowing for the creation of more sophisticated advanced web applications.<br>Learned about the World Wide Web and HTTP requests, allowing for web applications to communicate and retrieve data from servers.<br>Worked over the course of a semester in a team of five in order to develop a detailed web application in the AMP stack.<br>";
	}
	x = document.getElementsByClassName("webSciTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Web Science Systems Development<h6>Primary Languages: HTML5, CSS3, JavaScript, MEAN Stack</h6>";
	}
	x = document.getElementsByClassName("webSciDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "A continuation from Web Systems Development, this course introduced the MEAN stack, frameworks, and other components of a web appplication, such as APIs. <br>Explored methodology such as application design, software versioning, and team development. <br>Worked in a team of six in order to develop a web application in the MEAN stack which could theoretically be advanced enough to be sold as a product.";
	}
	x = document.getElementsByClassName("infoDesignTitle");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Information Design";
	}
	x = document.getElementsByClassName("infoDesignDesc");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = "Examined graphical representation data in order to analyze and discuss how and why graphics were created the way they were. <br>Observed visual presentations of historical data to determine the most efficient ways to represent the complex information being displayed without distorting the data within. <br>Viewed ways in which information designers can push certain messages across that would otherwise be unclear with different design choices. <br>Designed four personal designs from data both personal and external, presenting them using methods and graphs discussed in class.";
	}
}


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