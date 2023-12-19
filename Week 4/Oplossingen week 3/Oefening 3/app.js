(() => {
	const addButton = document.getElementById('addButton');
	const itemsUl = document.getElementById('items');

	function addTodo(todo){
		const li = document.createElement('li');
		li.innerText = todo;

		// doorstreep het todo als er op geclickt wordt
		li.addEventListener('click', () => {
			li.classList.toggle('checked');
		});

		li.addEventListener('dblclick', () => {
			li.remove();
		});

		itemsUl.append(li);
	}

    
	// enkel nodig bij addTodo2 (maar kan ook gebruikt worden bij het eerste)
    // dan is lijn 10 - 16 niet nodig meer
	itemsUl.addEventListener('click', (event) => {
		if(event.target != itemsUl){
			event.target.classList.toggle('checked');
		}
	});

	itemsUl.addEventListener('dblclick', (event) => {
		if(event.target != itemsUl){
			event.target.remove();
		}
	});
    
	function addTodo2(todo){
		// als we op deze manier willen werken moeten we de event handlers niet aan elk element hangen
		// aangezien we geen referentie naar het object hebben
		// dan heb je de twee event listeners/handlers hierboven nodig
		itemsUl.innerHTML += `<li>${todo}</li>`;
	}


	addButton.addEventListener('click', () => {
		// dit is een event handler
		const todo = prompt('Wat is je todo?').trim(); // als het gewoon spatie is, negeer het ook
		if(todo.length > 0){
			// element toevoegen
			addTodo2(todo);
		}
		console.log(todo);
	});
})();