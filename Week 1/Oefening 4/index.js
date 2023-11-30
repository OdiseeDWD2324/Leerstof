let klas = [];
let lettergrepen = ['ab','eb','ib','ub','ob',
	'aq','eq','iq','iq','oq',
	'aw','ew','iw','iw','ow',
	'ar','er','ir','ir','or',
	'at','et','it','it','ot',
	'op'];

function random(max){
	return Math.floor(Math.random()*max);
}

function randomNaam(){
	let size = lettergrepen.length;
	let voornaam = lettergrepen[random(size)] + lettergrepen[random(size)];
	let achternaam = lettergrepen[random(size)] + lettergrepen[random(size)] + lettergrepen[random(size)];

	return voornaam + ' ' + achternaam;
}

function pad(num, size) {
	let s = '000000000' + num;
	return s.substr(s.length-size);
}

/*
klas.push({'nummer': 'NR-01', 'naam': randomNaam()});
klas.push({'nummer': 'NR-02', 'naam': randomNaam()});
klas.push({'nummer': 'NR-03', 'naam': randomNaam()});
klas.push({'nummer': 'NR-04', 'naam': randomNaam()});
console.log(klas);
*/

/*
function maakKlas(aantal){
	let klas = new Object();

	klas['studenten'] = [];

	for(i = 0; i< aantal; i++){
		let nummer = 'NR-' + pad(i+1, 2);
		let naam = randomNaam();
		klas.studenten.push({'nummer': nummer, 'naam': naam});
	}

	return klas;
}

let dagKlas = maakKlas(20);
let avondKlas = maakKlas(10);
console.log(dagKlas);
console.log(avondKlas);
*/

function maakKlas(aantal, moment){
	let klas = new Object();

	klas['studenten'] = [];

	for(i = 0; i< aantal; i++){
		let nummer = 'NR-' + pad(i+1, 2);
		let naam = randomNaam();
		klas.studenten.push({'nummer': nummer, 'naam': naam, 'moment': moment});
	}

	return klas;
}

let dagKlas = maakKlas(20, 'dag');
let avondKlas = maakKlas(10, 'avond');

function toonStudent(nummer, klas){
	let student = klas.studenten.find(student =>student.nummer == nummer);

	console.log(student);
}

function kiesStudent(klas){
	return 'NR-' + pad(random(klas.studenten.length), 2);
}

function toonWillekeurigeStudent(klas){
	toonStudent(kiesStudent(klas), klas);
}