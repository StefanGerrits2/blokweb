/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var hartje = "roze";
var afbeelding = document.getElementById("voegtoe");
var favorietnav = document.getElementById("favorietnav");
var h2 = document.querySelector("h2");

/*delay voor favorieten tabje*/
function terug() {
	favorietnav.classList.toggle("rood");
}

/*animatie favorieten tabje en titel verhaal*/
function favoriet(){
    if (hartje == "roze") {
		setTimeout(terug, 2500); /*delay toevoegen om animatie opnieuw uit te voeren*/
	    favorietnav.classList.toggle("rood");
	    h2.classList.toggle("red");
        afbeelding.src = "images/toegevoegd1.svg";
		hartje = "rood";
    }
	
    else {
		h2.classList.toggle("blue");
        afbeelding.src = "images/voegtoe1.svg";
		hartje = "roze";
   }
}

afbeelding.addEventListener("click", favoriet, false);

/*animatie verhaal voor desktop*/
var verhaal = document.getElementById("verhaal");
var verhaalnummer = "1";

window.addEventListener("scroll", function() {
	
    var scrolled = window.scrollY;
	console.log(scrolled);
	
	if (scrolled < "500") {
		verhaal.src = "images/verhaalpng.png";
	} 
	
	if (scrolled > "500" && scrolled < "700") {
		verhaal.src = "images/verhaalpng2.png";
	} 
	
	if (scrolled > "700" && scrolled < "1000") {
		verhaal.src = "images/verhaalpng3.png";
	} 
	
	if (scrolled > "1000" && scrolled < "1100") {
		verhaal.src = "images/verhaalpng4.png";
	} 
	
	if (scrolled > "1100" && scrolled < "1300") {
		verhaal.src = "images/verhaalpng5.png";
	}
	
	if (scrolled > "1300" && scrolled < "1500") {
		verhaal.src = "images/verhaalpng6.png";
	}
	
	if (scrolled > "1500" && scrolled < "1700") {
		verhaal.src = "images/verhaalpng7.png";
	}
	
	if (scrolled > "1700") {
		verhaal.src = "images/verhaalpng8.png";
	}

});

/*woord knotsgek ronddraaien*/
var knotsgekke = document.getElementById("child");

knotsgekke.addEventListener("mouseover", function() {
	 
	 knotsgekke.classList.toggle("draaien");
	
});
