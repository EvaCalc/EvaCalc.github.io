     const delay = ms => new Promise(res => setTimeout(res, ms));
	  window.onload = function() {
		  document.getElementById("Main").style.opacity="0";
 	  OnStart();
	  };
   function OnStart(){ 
yourFunction()
   }
const yourFunction = async () => {
  await delay(5000);
document.getElementById("Main").style.opacity="1";
	document.getElementById("loader").style.opacity="0";
	alert("done?");
};
