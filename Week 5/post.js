const base_url='https://gorest.co.in/public/v2/users';

// headers
const headers = new Headers();
headers.set('Authorization', 'Bearer 74beae10ca1d9415353e83ee332ecb5f144c464f194419a1dfbca1274a1602ca');
headers.set('content-type', 'application/json');
headers.set('accept', 'application/json');

// get available users
function log_available_users(){
	fetch(base_url).then((response)=>{
		if(response.ok){
			return response.json();
		}
	}).then((json) => {
		console.log(json);
	});
}

// add user
async function add_users(name, gender, email, status){

	const options = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify({name: name, gender: gender, email: email, status: status})
	};

	// opties worden gebruikt om get te veranderen in post en te zeggen, welke data er naar de server gestuurd wordt
	let response = await fetch(base_url, options);
	if(response.ok){
		console.log('user added');
	}

	log_available_users();
}

async function delete_user(id){
    
	const options = {
		method: 'DELETE',
		headers: headers,
	};

	// opties worden gebruikt om get te veranderen in post en te zeggen, welke data er naar de server gestuurd wordt
	let response = await fetch(base_url + '/' + id, options);
	if(response.ok){
		console.log('user deleted');
	}
}

async function delete_all_users(){

	let response = await fetch(base_url);
	if(response.ok){
		let json = await response.json();
		json.forEach(async user => {            // dit is een asynchrone lambda functie  
		    console.log(user);
			await delete_user(user.id);
		});
	}

	log_available_users();
}

log_available_users();
add_users('jens', 'male', 'jens.baetensadf@odisee.be', 'active');
delete_all_users();