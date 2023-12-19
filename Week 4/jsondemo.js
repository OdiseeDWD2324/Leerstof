const persoon = {
	voornaam: 'Jens',
	achternaam: 'Baetens',
	leeftijd: 32,
	docent: true,
	huisdieren: ['hond', 'paard'],
	partner: {
		voornaam: 'Jane',
		achternaam: 'Doe'
	},
	vakken: [
		{
			naam: 'DWD',
			score: 18
		}, {
			naam: 'PTT',
			score: 17
		}
	]
};

const webshop = {
	naam: 'mijn fantastische webshop',
	producten: [
		{
			naam: 'product 1',
			prijs: 2000000000,
			beschikbaar: 200
		}, {
			naam: 'product 2',
			prijs: 3,
			beschikbaar: 4
		}
	]
};

console.log(persoon);
const jsonString = JSON.stringify(persoon);
console.log(jsonString);
console.log(JSON.parse(jsonString));

// korte intermezzo voor de taak
const divProducten = document.getElementById('producten');

function maakProduct(product){
	const div = document.createElement('div');
	//const pNaam = document.createElement('p');
	//pNaam.classList.add()
	div.innerHTML = `<p style="color:red">Naam ${product.naam}</p>
                     <p>Prijs ${product.prijs}</p>
                     <p>${product.beschikbaar}</p>`;

	return div;
}

for(let product of webshop.producten){
	console.log(product);

	divProducten.append(maakProduct(product));
}

// Dit is de aangeraden manier
localStorage.setItem('persoon', persoon);   // Dit gaat niet werken -> want wordt omgezet naar string dus [Object object]
localStorage.setItem('webshop', JSON.stringify(webshop));   //  je moet het omzetten naar JSON string
// Dit is ook een manier (ouder en niet aangeraden)
localStorage.persoon2 = JSON.stringify(persoon);

webshop.naam = 'test'; // dit gaat niet in de localStorage aangepast worden

// dit moet je na elke wijziging doen
localStorage.setItem('webshop', JSON.stringify(webshop)); 