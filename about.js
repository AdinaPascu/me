document.getElementsByClassName("box")[0].addEventListener("click", function(e){
	if(e.target.parentNode.classList[0] === "real" && e.target.parentNode.parentNode.classList[1] !== "focus"){
		var focus = document.getElementsByClassName("focus")[0];
		var className = focus.className.split(" ");
		focus.className = className[0];
		e.target.parentNode.parentNode.className = e.target.parentNode.parentNode.classList[0] + " " + className[1];
		console.log(e.target.parentNode.parentNode.className);
		setTimeout(function(){
			e.target.parentNode.parentNode.className = e.target.parentNode.parentNode.classList[0] + " " +
													   e.target.parentNode.parentNode.classList[1] + " " +
													   className[2];
		},1000);

		var cube = document.getElementsByClassName("cube")[0];
		cube.className = "cube show-" + e.target.parentNode.parentNode.classList[0];
		document.getElementsByClassName("rightArrow")[0].style.display = "none";
	}
});

document.getElementsByClassName("box")[0].addEventListener("mouseover", function(e){
	console.log(e);
	if(e.target.parentNode.classList[0] === "real" && e.target.parentNode.parentNode.classList[2] === "focus"){
		var reflectionDiv = e.target.parentNode.parentNode.childNodes[19];
		var className = e.target.classList[0];
		var reflection = reflectionDiv.getElementsByClassName(className)[0];
		if(reflection){
			reflection.parentNode.style.transform = "translateZ(30px)";
		}
		var info = document.getElementById(className);
		info.style.display = "flex";
		document.getElementsByClassName("downArrow")[0].style.display = "none";
		document.getElementById("start").style.display = "none";
	}
});
document.getElementsByClassName("box")[0].addEventListener("mouseout", function(e){
	if(e.target.parentNode.classList[0] === "real" && e.target.parentNode.parentNode.classList[2] === "focus"){
		var reflectionDiv = e.target.parentNode.parentNode.childNodes[19];
		var className = e.target.classList[0];
		var reflection = reflectionDiv.getElementsByClassName(className)[0];
		if(reflection){
			reflection.parentNode.style.transform = "translateZ(0px)";
		}
		var info = document.getElementById(className);
		info.style.display = "none";
		
	}
});