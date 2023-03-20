const delay = ms => new Promise(res => setTimeout(res, ms));
window.onload = function() {
	document.getElementById("Main").style.opacity="0";
 OnStart();
};
function OnStart(){ 
yourFunction();
 interval();
}
const yourFunction = async () => {
await delay(5000);
document.getElementById("Main").style.opacity="1";
document.getElementById("loader").style.opacity="0";
};
const interval = setInterval(function() {
var w = window.innerWidth;
if(w < 1024){
  document.getElementById("Header").style.fontSize="xx-large";
}
if(w < 804){
document.getElementById("Header").style.fontSize="x-large";
document.getElementById("Header").style.left="75%";
document.getElementById("butons").style.left="62%";
}
console.log(w.toString())
}, 100);
