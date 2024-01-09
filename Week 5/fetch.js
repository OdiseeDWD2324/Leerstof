const base_url = 'https://api.chucknorris.io/jokes/random';

// met promises
/*
//data vragen aan de api via de url
fetch(base_url).then((response) => {
	console.log(response);
	//dit geeft de reponse
	// als ok true is, dan is er een correcte call geweest en kunnen we verder doen
	if(response.ok){
		return response.json(); // opnieuw een promise
	} else {
		throw Error('Bad request');
	}
}).then((json) => {
	console.log(json);

	document.getElementById('joke').innerText = json.value;
}).catch((error) => {
	console.log(error);
});
*/

async function showJoke(){
	let response = await fetch(base_url);
	console.log(response);
	if(response.ok){
		let json = await response.json();
		console.log(json);

		document.getElementById('joke').innerText = json.value;
	} else {
		console.log('Bad request');
	}
}

showJoke();