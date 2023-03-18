     const delay = ms => new Promise(res => setTimeout(res, ms));
	  window.onload = function() {
 	  OnStart();
		  
	  };
   function OnStart(){ 
yourFunction()
   }
const yourFunction = async () => {
  await delay(5000);
	alert("done?");
};
function closemain(){
	document.getElementById("Main").visibility="hidden";
}
function openmain(){
	 document.getElementById("Main").visibility="visable";
}
