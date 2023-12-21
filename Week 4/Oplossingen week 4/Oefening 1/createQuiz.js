(() => {
	const questionType = document.getElementById('questionType');
	const openQuestionType = document.getElementById('open');
	const multipleQuestionType = document.getElementById('multiple');
	const openQuestionAddButton = document.getElementById('openAddButton');
	const addOptionButton = document.getElementById('addOption');
	const multipleQuestionAddButton = document.getElementById('multipleAddButton');

	const textarea = document.getElementById('questionOutput');

	const questions = [];

	// plaats alle vragen als tekst in de tekstarea
	function exportQuestions(){
		const textarea = document.getElementById('questionOutput');
		textarea.value = JSON.stringify({questions: questions, numberOfQuestions: questions.length});
		localStorage.setItem('quiz', JSON.stringify({questions: questions, numberOfQuestions: questions.length}));
	}

	// toggle the visibility of open and multiple choice questions
	questionType.addEventListener('change', () => {

		// pick a question -> hide everything
		openQuestionType.classList.add('visually-hidden');
		multipleQuestionType.classList.add('visually-hidden');

		if(questionType.value == 'open'){
			openQuestionType.classList.remove('visually-hidden');
		} else if(questionType.value == 'multiple'){
			multipleQuestionType.classList.remove('visually-hidden');
		}
	});

	// add open questions
	function createOpenQuestion(){
		const question = document.getElementById('openQuestion');
		const answer = document.getElementById('openAnswer');

		const q = {
			question: question.value,
			answer: answer.value,
			type: 'open'
		};

		// maak de velden terug leeg
		question.value = '';
		answer.value = '';

		return q;
	}

	openQuestionAddButton.addEventListener('click', (event) => {
		// voorkom dat het form de pagina refreshed
		event.preventDefault();
		// de open vraag gaan bewaren
		questions.push(createOpenQuestion());
		// update de json in de textarea
		exportQuestions();
	});

	// add multiple choice questions

	function addOption(e){
		e.preventDefault();
		const optionsDiv = document.getElementById('options');
		const div = document.createElement('div');
		div.classList.add('row');
		div.classList.add('align-items-center');
		div.classList.add('mb-2');
		div.innerHTML= `<div class="col-5 offset-1"><input type="text" class="form-control"></div><div class="form-check col-3"><input type="checkbox" class="form-check-input" id="checkbox${optionsDiv.children.length}"><label for="checkbox${optionsDiv.children.length}" class="form-check-label">correct</label></div>`;
		const removeButton = document.createElement('button');
		removeButton.innerText = 'remove';
		removeButton.classList.add('btn');
		removeButton.classList.add('btn-secondary');
		removeButton.classList.add('col-2');
		removeButton.addEventListener('click', () => {
			optionsDiv.removeChild(div);
		});
		div.append(removeButton);
		optionsDiv.append(div);
	}

	addOptionButton.addEventListener('click', addOption);

	function createMultiQuestion(){
		const question = document.getElementById('multipleQuestion');
		// zoek naar elke individuele optie
		const optionsEles = document.querySelectorAll('#options .row');

		const opties = [];
		const correcteOpties = [];

		for(let option of optionsEles){
			const value = option.querySelector('input[type=text]').value;
			const correct = option.querySelector('input[type=checkbox]').checked;

			opties.push(value);
			if(correct){
				correcteOpties.push(value);
			}
		}

		const q = {
			question: question.value,
			answerOptions: opties,
			correctAnswers: correcteOpties,
			type: 'multiple'
		};

		// maak de velden terug leeg
		question.value = '';
		document.querySelector('#options').innerHTML = '';

		return q;
	}

	
	multipleQuestionAddButton.addEventListener('click', (event) => {
		// voorkom dat het form de pagina refreshed
		event.preventDefault();
		// de multiple choice vraag gaan bewaren
		questions.push(createMultiQuestion());
		// update de json in de textarea
		exportQuestions();
	});

})();