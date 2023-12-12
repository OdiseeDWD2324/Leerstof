function clickEventHandler(event){
	console.log('via vaste functie');
}

function removeClickEventHandler(event){
	// dit mag geen anonieme functie zijn, anders kan ze niet verwijderd worden
	console.log('click');

	if(event.target.hasAttribute('leeftijd')){
		console.log(event.target.getAttribute('leeftijd'));
	} else {
		console.log('geen leeftijd gevonden');
	}
}

// get element by id
// twee lijnen hieronder zijn identiek
//(function(){
(() =>{
	// dit vraagt het html element op
	const inpLeeftijd = document.getElementById('leeftijd');
	const header1 = document.getElementById('header1');
	const div1 = document.getElementById('div');

	// met .value kan je waarden uit inputs halen
	console.log(inpLeeftijd.value);

	// met innerText vraag je de leesbare tekst op
	console.log(header1.innerText);
	// met innerHTML vraag je de html code van het object op
	console.log(div1.innerHTML);

	// ze kunnen ook gebruiken om zaken aan te passen
	header1.innerText += ' hallo';
	div1.innerHTML += '<p>blablabla</p>';

	// query selector / all
	const liBenadrukt = document.querySelector('.benadrukt');
	// dit doet hetzelfde als de eerste getElementById
	const inpLeeftijdBackup = document.querySelector('#leeftijd');
	console.log(liBenadrukt.innerText);

	console.log('all');
	const benadruktElementen = document.querySelectorAll('.benadrukt');
	for(let ele of benadruktElementen){
		console.log(ele.innerText);
		// verwijder een klasse uit de lijst met klassen
		ele.classList.remove('benadrukt');
	}

	// voeg een klasse toe aan de lijst met cssklassen
	div1.classList.add('benadrukt');
	// zet het aan als het uit staat of zet het uit als het aan staat
	div1.classList.toggle('benadrukt');

	// events
	const btnFunction = document.getElementById('clickFunctionButton');
	const btnAnonymousFunction = document.getElementById('clickAnonymousButton');
	const btnArrowFunction = document.getElementById('clickArrowButton');

	btnFunction.addEventListener('click', clickEventHandler);
	btnAnonymousFunction.addEventListener('click', function(event){
		console.log('anonieme functie');
	});
	btnArrowFunction.addEventListener('click', (event) => {
		console.log('arrow');
	});

	// voorbeeld usecapture
		
	const outerdiv = document.getElementById('outer-div');
	const innerdiv = document.getElementById('inner-div');
	const button = document.getElementById('button');

	// hieronder een voorbeeldje van hoe complex de useCapture kan worden
	// tip: keep it simple en gebruik het standaardgedrag (bubble)
	outerdiv.addEventListener('click', ()=> {
		console.log('click outerdiv');
	},true);
	
	innerdiv.addEventListener('click', ()=> {
		console.log('click innerdiv');
	},false);
	
	button.addEventListener('click', ()=> {
		console.log('click button');
	},true);

	// remove event listeners
	
	const clickbtn = document.getElementById('click-btn');
	const addbtn = document.getElementById('add-btn');
	const removebtn = document.getElementById('remove-btn');

	// let op met dit soort constructies, als je dynamisch events toevoegd met anonieme functies 
	// kan het zijn dat het meerdere keren uitgevoerd wordt als je het meerdere keren toevoegd.
	/*addbtn.addEventListener('click', () => {
		// deze functies voor add en remove kunnen anoniem zijn want ze blijven bestaan
		clickbtn.addEventListener('click', () => {console.log('click');});
	});*/
	
	addbtn.addEventListener('click', () => {
		// deze functies voor add en remove kunnen anoniem zijn want ze blijven bestaan
		clickbtn.addEventListener('click', removeClickEventHandler);
		clickbtn.setAttribute('leeftijd', inpLeeftijd.value);
	});
	
	removebtn.addEventListener('click', () => {
		// deze functies voor add en remove kunnen anoniem zijn want ze blijven bestaan
		clickbtn.removeEventListener('click', removeClickEventHandler);
		clickbtn.removeAttribute('leeftijd');
	});

	// create new elements
	const output = document.querySelector('#output');
	const prullenbak = document.querySelector('#prullenbak');
	const btnAppend = document.querySelector('#knop-append');
	const btnPrepend = document.querySelector('#knop-prepend');

	let teller = 0;
	let verwijderdeElementen = [];

	function createEle(count){
		const ele = document.createElement('p');
		// met die schuine quotes tekentjes kan je variabelen in een string gaan toevoegen als volgt
		ele.innerText = `paragraaf ${count}`;
		teller ++;
		return ele;
	}

	function toonPrullenbak() {
		// begin met een lege prullenbak
		prullenbak.innerHTML = '';

		for(let ele of verwijderdeElementen){
			ele.classList.add('benadrukt');
			prullenbak.append(ele);	
		}
	}

	btnAppend.addEventListener('click', () => {
		// maak nieuw element aan
		//const ele = document.createElement('p');
		// met die schuine quotes tekentjes kan je variabelen in een string gaan toevoegen als volgt
		//ele.innerText = `paragraaf ${teller}  j;adjfa ${inpLeeftijd.value}`;
		// dit is gelijk aan
		// ele.innerText = 'paragraaf ' + teller;

		// ipv 2 keer het bovenstaande te doen:
		let ele = createEle(teller);
		output.append(ele);
	});

	btnPrepend.addEventListener('click', ()=>{
		output.prepend(createEle(teller));
	});

	// 2 manieren om elementen te verwijderen als je erop klikt
	// 1: koppel een eventlistener aan elke paragraaf te koppelen
	//		Voordeel is dat je specifiek weet dat er op een paragraaf is geklikt
	//		Nadeel is dat je veel event listeners kan hebben wat je website kan laten vertragen (als je veel paragrafen toevoegt)

	//2: koppel een eventlistener te koppelen aan de output div (dan kan je het doen met 1 event listener)
	//		voor en nadelen zijn omgekeerd

	output.addEventListener('click', (event) => {
		// check of we niet naast een paragraaf hebben geklikt
		if(event.target === output){
			console.log('ernaast');
			// dan doen we niets
			return;
		}

		// verwijder de paragraaf waar we op geklikt hebben
		event.target.remove();

		// om het aan de prullenbak toe te voegen
		// om aan te tonen dat het element nog bestaat nadat je Remove gedaan hebt
		verwijderdeElementen.push(event.target);
		console.log(verwijderdeElementen);

		toonPrullenbak();
	})


})();