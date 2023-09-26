function getFormvalue(){
	const form = 
		document.getElementById("form1");

	const firstName = 
		form.elements.fname.value;
	const lastName = 
		form.elements.lname.value;
	alert(`${firstName}${lastName}`);
} 