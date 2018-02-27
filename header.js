var navbar = document.getElementsByTagName("nav")[0];
var menu = document.getElementById("menu");
menu.addEventListener("click", function(){
	var display = navbar.className;
	if (display == "hide") {
		navbar.className = "show";
	} else {
		navbar.className = "hide";
	}
});
var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
function goToPage(val){
	window.location.href = val + '.html';
}
home.addEventListener("click", function(){goToPage('index')});
about.addEventListener("click", function(){goToPage('about')});
portfolio.addEventListener("click", function(){goToPage('portfolio')});
contact.addEventListener("click", function(){goToPage('contact')});