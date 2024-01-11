(() => {
	const url = 'https://odiseenodetest.azurewebsites.net/';

	const form = document.getElementById('input');
	const output = document.getElementById('output');

	async function readMessage(){
		const response = await fetch(url);
		console.log(response);

		if(response.ok){
			const json = await response.json();
			output.innerText = JSON.stringify(json);
		} else{
			const text = await response.text();
			console.log(text);
		}
	}

	async function sendMessage(naam, message){
		const headers = new Headers();
		headers.append('content-type', 'application/json');

		const options = {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({naam: naam, message: message})
		};

		const result = await fetch(url, options);
		console.log(result);

		if(result.ok){
			readMessage();
		} else{
			const text = await result.text();
			console.log(text);
		}
	}
    
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const naam = form.name.value;
		const message = form.message.value;
		sendMessage(naam, message);
	});
    

})();

