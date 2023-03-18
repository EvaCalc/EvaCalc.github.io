     const delay = ms => new Promise(res => setTimeout(res, ms));
	  window.onload = function() {
 	  OnStart();
	  };
   function OnStart(){ 
yourFunction()
   }
const yourFunction = async () => {
  await delay(5000);
  alert("hi");

  await delay(5000);
  console.log("Waited an additional 5s");
};
