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

