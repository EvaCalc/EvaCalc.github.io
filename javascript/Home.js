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
	if(w.toString() < "1024"){
		document.getElementById("Header").style.font-size="31pt";
	}
	console.log(w.toString())
 }, 1000);
