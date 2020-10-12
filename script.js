const dropdown = document.getElementById("dropdown");
const dropdownContant = document.getElementById("dropdown-contant");
dropdown.addEventListener("clcik",display);
dropdown.addEventListener("click", display);
console.log(dropdown);
console.log(dropdownContant);
let c = 0 ; 
function display(){
	console.log("OK")
	if(c%2 == 0 )
		dropdownContant.style.display = "block";
	else 
		dropdownContant.style.display = "none";
	c = c + 1 ;
}