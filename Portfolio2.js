
var pics = [
  "img/meCookie.png",
  "img/picAmy1.jpg",
	"img/picNightmare.jpg",
	"img/PicNikola.jpg",
	"img/picZebraJelena.jpg",
	"img/PortfolioAmy.jpg",
	"img/PortfolioAll.jpg",
	"img/Abird.jpg",
	"img/death.jpg",
	"img/Frida2.jpg",
	"img/Fridich.jpg",
	"img/loss.jpg",
	"img/Pearl.jpg",
];

var img = document.querySelector("img.mecropped");
var counter = 1;


img.onmouseover = function() {
	document.getElementById("cookie").style.display = "none";
}

document.getElementById("see").onclick = function() {
	document.getElementById("cookie").style.display = "none";
	if(counter === 13){
		counter = 0;
	}	
	img.src = pics[counter]
	counter = counter + 1;
}

function checkWish(form) {
	if (form.wishText.value == "") {
		alert("I guess you want me to paint you an ostrich chased by a hen. Great choice!");
		return false;
	}
	//form.wishText.value = "";
	return true;
}

		
