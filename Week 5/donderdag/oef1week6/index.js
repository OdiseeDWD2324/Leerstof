const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const fase = document.getElementById('fase');

// de timer functie om een callback te doen na x aantal seconden
function timer(time){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

function firstPart(){
	step2.classList.add('hide');
	step3.classList.add('hide');
	img1.classList.remove('deselected');
	fase.innerText = 'Bestelling ontvangen';
}

function secondPart(){
	step1.classList.remove('start');
	step2.classList.remove('hide');
	step2.classList.add('start');
	img2.classList.remove('deselected');    
	fase.innerText = 'Bestelling wordt verwerkt';
}

function thirdPart(){
	step2.classList.remove('start');
	step3.classList.remove('hide');
	step3.classList.add('start');
	img3.classList.remove('deselected');
	fase.innerText = 'Bestelling onderweg';
}

function fourthPart(){
	step3.classList.remove('start');
	img4.classList.remove('deselected');
	fase.innerText = 'Bestelling geleverd';
}

firstPart(); // toon fase 1
timer(5000).then(() => {
	secondPart();
	return timer(2000);
}).then(() => {
	thirdPart();
	return timer(5000);
}).then(() => {
	fourthPart();
});