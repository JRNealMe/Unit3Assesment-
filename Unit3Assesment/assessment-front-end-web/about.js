console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const duck = document.querySelector('img')

duck.addEventListener ('mouseover', (e)=> {
	alert('compliment')
})