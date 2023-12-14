(()=> {

	// met het .forms kunnen we aan alle forms in de html pagina
	const forms = document.forms;
	// op basis van het id van het form kunnen we het juiste form opvragen
	const loginForm = forms.loginForm;
	// op onderstaande manier kunnen we inputs opvragen
	const usernameInput = loginForm.username;
	const passwordInput = loginForm.password;
	// een andere manier is dat je eigenlijk gaat werken zoals dinsdag
	const emailInput = document.getElementById('email');
	const ageInput = document.getElementById('age');

	const errors = document.getElementById('errors');

	function addError(message){
		const li = document.createElement('li');
		li.innerText = message;
		errors.append(li);
	}
	
	// we kunnen onze eigen event listener aan het form of de submit button hangen voor zelf javascript code uit te voeren
	// ik hang de functie aan het form hier
	loginForm.addEventListener('submit', (event) => {
		console.log('hier');

		// manier 1
		/*if(!ageInput.validity.valid || emailInput.validity.patternMismatch){
			// age of email is invalid
				
			event.stopPropagation(); // dit zorgt ervoor dat het afvuren van events in volgende niveaus onderbroken wordt
			event.preventDefault(); // dit zorgt ervoor dat het huidige form niet gesubmit wordt

		}*/

		// manier 2
		let geldig = true;
		if(!ageInput.validity.valid){ // uitroepingsteken is not dus is gelijk aan == false
			geldig=false;
			addError('De leeftijd moet tussen 0 en 150 zijn');
			ageInput.setCustomValidity('De leeftijd moet tussen 0 en 150 zijn');
			// toon de foutboodschap
			ageInput.reportValidity();
		}
		if(emailInput.validity.patternMismatch){
			geldig=false;
			addError('Het emailadres moet eindigen met @student.odisee.be');
			// stel je eigen foutboodschap in
			// werken met custom validity doe je best als je de validity live checkt (dus niet in het submit event maar in de blur events hieronder)
			emailInput.setCustomValidity('Het emailadres moet eindigen met @student.odisee.be');
			// toon de foutboodschap
			emailInput.reportValidity();
		}

		if(!geldig){
			event.stopPropagation(); // dit zorgt ervoor dat het afvuren van events in volgende niveaus onderbroken wordt
			event.preventDefault(); // dit zorgt ervoor dat het huidige form niet gesubmit wordt
		} else {
			// hier kan je wel nog submitten want de inputs zijn geldig
			console.log(usernameInput.value);
			console.log(ageInput.value);
		}
	});

	// focus --> als je in de input tag gaat
	// blur  --> als je uit de input tag gaat
	usernameInput.addEventListener('blur', (event) => {
		console.log(usernameInput.value.length);
		errors.innerHTML = ''; // verwijder de oude fouten
			
		if(usernameInput.value.length < 3 || usernameInput.value.length > 5){
			// dit is ongeldige input
			const li = document.createElement('li');
			li.innerText = 'De username moet tussen 3 en 5 karakters zijn';
			errors.append(li);
		} else {
			// dit is geldige input
		}
	});

	// maak het wachtwoord veldje leeg als je er terug in klikt
	passwordInput.addEventListener('focus', (event) => {
		passwordInput.value = '';
	});

	// alternatieve manier - door in javascript de html validatie uit te voeren
	passwordInput.addEventListener('blur', (event) => {
		errors.innerHTML = ''; // verwijder de oude fouten
			
		// met validity.valid gebruiken we de html validatie zoals vastgelegd in de hmtl code (in dit geval enkel required)
		if(passwordInput.validity.valid){
			// dit is geldige input
			
		} else {
			// dit is ongeldige input
			const li = document.createElement('li');
			li.innerText = 'Het passwoord is verplicht';
			errors.append(li);
		}
	});

	ageInput.addEventListener('blur', (event) => {
		console.log(ageInput.value);
		// met validity.valid gebruiken we de html validatie zoals vastgelegd in de hmtl code (in dit geval enkel required)
		if(ageInput.validity.valid){
			// dit is geldige input
			usernameInput.classList.remove('invalid');
		} else {
			usernameInput.classList.add('invalid');
		}
	}); 

})();
