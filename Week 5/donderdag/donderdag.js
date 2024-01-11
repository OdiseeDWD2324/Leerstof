let user = {
	firstName: 'Jens',
	lastName: 'Baetens',
	userName: 'jens321412',
	email: 'jens321412@odisee.be',
	password: 'demodemo'
};

const headers = new Headers();
headers.set('content-type', 'application/json');

let url_users = 'https://twitterapi.azurewebsites.net/users';
let url_messages = 'https://twitterapi.azurewebsites.net/messages';

function registerUser(user){

	let requestOptions = {
		method: 'POST',
		body: JSON.stringify(user),
		redirect: 'follow',
		headers:headers
	};

	fetch(url_users + '/register', requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}

async function getMessages(){

	let requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers:headers
	};

	const response = await fetch(url_messages, requestOptions);
	if(response.ok){
		const json = await response.json();
		console.log(json);
	} else {
		const text = await response.text();
		console.log(text);
	}
}

async function loginUser(user){
	let requestOptions = {
		method: 'POST',
		body: JSON.stringify({email: user.email, password: user.password}),
		redirect: 'follow',
		headers:headers
	};

	const response = await fetch(url_users + '/login', requestOptions);
	if(response.ok){
		const json = await response.json();   
		headers.set('x-access-token', json.token); // dit stelt het token in zodat je ingelogd bent
		getMessages();
	} else{
		const text = await response.text();
		console.log(text);
	}
}


(() => {
	//registerUser(user);

	loginUser(user);
})();