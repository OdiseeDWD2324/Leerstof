const base_url = 'https://pokeapi.co/api/v2/pokemon';
const pokemonListElement = document.getElementById('pokemon-list');
let prevUrl = null;
let nextUrl = null;
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function printPokemon(pokemon){
	const li = document.createElement('div');
	li.innerHTML = `<h1>${pokemon.name}</h1><img src='${pokemon.sprites.front_default}' >`;
	pokemonListElement.append(li);
}

async function loadPokemon(url){
	// deze functie vraagt informatie op aan een server -> maak deze async
	let response = await fetch(url);
	console.log(response);
	if(response.ok){
		let json = await response.json();
		printPokemon(json);
	} else {
		console.log(response.statusText); // statusText geeft informatie over wat er misging
	}
}

function printAllPokemons(data){
	prevUrl = data.previous;
	nextUrl = data.next;

	data.results.forEach(element => {
		loadPokemon(element.url);
	});
}

async function loadPokemons(base_url){

	pokemonListElement.innerHTML = '';

	let response = await fetch(base_url);
	console.log(response);
	if(response.ok){
		let json = await response.json();
		printAllPokemons(json);
	} else {
		console.log(response.statusText); // statusText geeft informatie over wat er misging
	}
}

loadPokemons(base_url);

prevButton.addEventListener('click', (e) => {
	// de buttons zijn links (<a>) dus willen we refreshen voorkomen
	// hiervoor doen we prevent default
	e.preventDefault();
	if(prevUrl != null){
		loadPokemons(prevUrl);
	}
});

nextButton.addEventListener('click', (e) => {
	// de buttons zijn links (<a>) dus willen we refreshen voorkomen
	// hiervoor doen we prevent default
	e.preventDefault();
	if(nextUrl != null){
		loadPokemons(nextUrl);
	}
});