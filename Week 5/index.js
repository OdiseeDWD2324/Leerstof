// functie met callbacks
/*function orderPizza(size, saus, topping){
	console.log('bestelling plaatsen');
	setTimeout(()=>{
		// dit is de handler van de setTimeout functie
		// dit is een Callback
		console.log(`Maak deeg voor ${size} pizza`);
		setTimeout(()=>{
			// dit is ook een callback
			console.log(`Smeer ${saus} op pizza`);
			setTimeout(()=>{
				// dit is ook een callback
				console.log(`Beleg pizza met ${topping.join()}`);
				setTimeout(()=>{
					console.log('Plaats pizza in de oven');
					setTimeout(()=>{
						console.log('Plaats pizza in doos');
						setTimeout(()=>{
							console.log('Lever pizza');
							setTimeout(()=>{
								console.log('Smakelijk');
							}, 1000);
						}, 2000);
					}, 10000);
				}, 5000);
			}, 1000);
		}, 2000);
	}, 2000);
}*/

const restaurantClosed = false;

function executeTask(boodschap, time){
	console.log(boodschap);
	//maak een promise aan
	const promise = new Promise((resolve, reject) =>{
		// een promise heeft intern een callback met resolve en reject
		if(restaurantClosed){
			// throw een error, promise kan niet afgehandeld worden
			reject('restaurant closed');
		} else {
			setTimeout(() => resolve(), time);
		}
	});

	// belangrijk om de promise te returnen
	return promise;
}

// functie met promises
/*
function orderPizza(size, saus, toppings){
	executeTask('Bestelling plaatsen', 2000).then(()=>{
		// we kunnen een promise object returnen in de callback van een promise
		// dit heeft als voordeel dat we de promisses kunnen gaan chainen (met .then aan elkaar hangen om een stappenplan te maken)
		return executeTask(`Maak deeg voor ${size} pizza`, 2000);
	}).then(() => {
		return executeTask(`Smeer ${saus} op pizza`, 1000);
	}).then(() => {
		return executeTask(`Beleg pizza met ${toppings.join()}`, 5000);
	}).then(() => {
		return executeTask('Plaats pizza in de oven', 10000);
	}).then(() => {
		return executeTask('Plaats pizza in doos', 2000);
	}).then(() => {
		return executeTask('Lever pizza', 1000);
	}).then(() => {
		console.log('Smakelijk');
	}).catch(()=>{
		// error handling is mogelijk met promises
		console.log('Restaurant is gesloten');
	});
}
*/

// functie met async await
async function orderPizza(size, saus, toppings){
	// dit is nu een asynchrone functie (door het async keyword)

	try{
		// met gebruik van het async keyword kan je het await keyword gebruiken om te wachten bij een functie die een promise returned
		// belangrijk dat het een promise returned
		await executeTask('Bestelling plaatsen', 2000);
		await executeTask(`Maak deeg voor ${size} pizza`, 2000);
		await executeTask(`Smeer ${saus} op pizza`, 1000);
		await executeTask(`Beleg pizza met ${toppings.join()}`, 5000);
		await executeTask('Plaats pizza in de oven', 10000);
		await executeTask('Plaats pizza in doos', 2000);
		await executeTask('Lever pizza', 1000);
        
		console.log('Smakelijk');
	} catch(e){
		// error handling zit hier
		console.log('Restaurant is gesloten');
	}
}

(() => {
	orderPizza('large', 'barbecuesaus', ['spek', 'extra kaas', 'champignons']);

	console.log('is mijn pizza al klaar?');
})();