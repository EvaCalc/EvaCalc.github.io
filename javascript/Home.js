     const delay = ms => new Promise(res => setTimeout(res, ms));
	  window.onload = function() {
 	  OnStart();
		  document.getElementById("Main").visibility="hidden";
	  };
   function OnStart(){ 
yourFunction()
   }
const yourFunction = async () => {
  await delay(5000);
  document.getElementById("Main").visibility="visable";
};
