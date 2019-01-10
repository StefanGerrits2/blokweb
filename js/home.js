/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*slider*/
var slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
};				  

/*Bron: https://www.w3schools.com/howto/howto_js_rangeslider.asp*/


var melding = document.querySelector("div:nth-of-type(2)");
var zoek = document.querySelector("form:first-of-type button");

zoek.addEventListener("click", function() {
	
	melding.classList.toggle("show");
     	
});

var kruis = document.querySelector("div:nth-of-type(2) img");

kruis.addEventListener("click", function() {
	
	melding.classList.toggle("hide");
     	
});

var filterknop = document.querySelector("body button:nth-child(7)");
var formulier = document.querySelector("form:nth-of-type(2)");

filterknop.addEventListener("click", function() {
	
	formulier.classList.toggle("show");
     	
});