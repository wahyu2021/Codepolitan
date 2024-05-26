// const button = document.querySelector('#clickme');

// button.onclick = function () {
// 	console.log('You clicked me');
// };

// const scream = () => {
// 	console.log('Dont touch me');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', stepSatu);
// eventbtn.addEventListener('click', stepDua);

// function stepSatu() {
// 	console.log('step satu');
// }

// function stepDua() {
// 	console.log('step dua');
// }

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;

const form = document.querySelector('#form')
const input = document.querySelector('input')
const list = document.querySelector('#notes')

// input.addEventListener('change', (e) => {
// 	document.querySelector('h1').innerText = input.value
// 	console.log('nilai berubah')
// })

// input.addEventListener('input', (e) => {
// 	console.log('nilai berhasil diinput')
// })

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if(input.value === ''){
		alert('tolong masukkan sesuatu')
	} else{
		const noteValue = input.value;
		const newList = document.createElement('li');
		newList.innerText = noteValue;
		list.append(newList)
		input.value = '';
		console.log("sumbitted form")
	}
})