/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var hartje = "roze";
var afbeelding = document.getElementById("voegtoe");
var favorietnav = document.getElementById("favorietnav");

function favoriet(){
    if (hartje == "roze") {
        afbeelding.src = "images/toegevoegd1.svg";
		hartje = "rood";
    }
	
    else {
        afbeelding.src = "images/voegtoe1.svg";
		hartje = "roze";
   }
}

afbeelding.addEventListener("click", favoriet, false);



afbeelding.addEventListener("click", function() {
	
	 favorietnav.classList.toggle("rood");
     
		
});








