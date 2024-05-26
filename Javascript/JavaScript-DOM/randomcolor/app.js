const btnGenerate = document.querySelector('#btnGenerate');
const colorCode = document.querySelector('#colorCode');

const codeRandColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

const generateColor = () => {
	document.body.style.backgroundColor = codeRandColor();
	colorCode.innerText = codeRandColor()
}