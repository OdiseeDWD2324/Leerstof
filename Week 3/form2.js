const divBedanking = document.getElementById('bedanking');

// de url kan je opvragen via search
const search = window.location.search;
console.log(search);
// parse de search string
// splits de string op de keys/names van de html inputs en houd de bijhorende values bij
const params = new URLSearchParams(search);
console.log(params);

// welke waarde voor username zit er in het username veldje
console.log(params.get('username'));

divBedanking.innerHTML = `<p>Bedankt voor je bestelling ${params.get('username')} </p>`;