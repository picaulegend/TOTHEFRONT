// JS Goes here - ES6 supported
const button = document.getElementsByClassName("category-label");

Array.from(document.getElementsByClassName('category-label')).forEach(v=>{
	if(v.innerHTML === "design") {
		v.className += " green";
	}
	if(v.innerHTML === "code") {
		v.className += " red";
	}
})