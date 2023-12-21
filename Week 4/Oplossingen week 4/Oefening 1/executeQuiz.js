(() => {
	const setupDiv = document.getElementById('setupDiv');
	const questionDiv = document.getElementById('questionDiv');
	const finalDiv = document.getElementById('finalDiv');

	const questionsString = localStorage.getItem('quiz');
	let questions = JSON.parse(questionsString);

	let currentQuestion = 0;
	let score = 0;

	function printFinal(){
		questionDiv.classList.add('visually-hidden');
		finalDiv.classList.remove('visually-hidden');
		const scoreElement= document.getElementById('score');
		scoreElement.innerText =  `je behaalde ${score} op ${questions.numberOfQuestions}`;
	}

	// toon JSON in de textarea
	document.getElementById('questions').value=questionsString;

	function printOpenQuestion(q){
		const questionDiv = document.getElementById('question');
		questionDiv.innerHTML = `<label for="answer" class="form-label">${q.question}:</label>
            <input type="text" class="form-control" name="answer" id="answer" placeholder="Answer?"></input>`;
	}

	function printMultiQuestion(q){
		const questionDiv = document.getElementById('question');
		let html = `<label for="answer" class="form-label">${q.question}:</label>`;

		let counter = 0;
		q.answerOptions.forEach(element => {
			html += `<div class ="form-check">
                        <input class="form-check-input" type="checkbox" value="${counter}" id="${counter}">
                        <label class="form-check-label for="${counter}">${element}
                        </label>
                    </div>
            `;
			counter ++;
		});

		questionDiv.innerHTML = html;
	}

	// toon de gewenste vraag
	function printQuestion(gewensteVraag){
		const question = questions.questions[gewensteVraag];
		if(question.type == 'open'){
			printOpenQuestion(question);
		} else if(question.type == 'multiple'){
			printMultiQuestion(question);
		}
	}

	// Controleer of het de laatste vraag was
	function nextQuestion(){
		// check of het de laatste vraag was
		if(currentQuestion < questions.numberOfQuestions){
			// indien niet
			printQuestion(currentQuestion);
		} else {
			// toon de score
			printFinal();
		}
	}

	// start de quiz
	const startBtn = document.getElementById('start');
	startBtn.addEventListener('click', () => {
		// herinitialiseer de counters
		currentQuestion = 0;
		score = 0;
    
		// verberg de vraag div
		setupDiv.classList.add('visually-hidden');

		// verander de localstorage questions door de question uit de textarea
		questions = JSON.parse(document.getElementById('questions').value);

		// toon vraag 1
		questionDiv.classList.remove('visually-hidden');
		nextQuestion();
	});

	// Beantwoorden van een vraag
	const answerBtn = document.getElementById('answerButton');
	answerBtn.addEventListener('click', () => {
		const q = questions.questions[currentQuestion];
		if(q.type == 'open'){
			const answer = document.getElementById('answer');
			if(answer.value == q.answer){
				score ++;
			}
		} else if (q.type == 'multiple'){
			const answers = document.querySelectorAll('#question div');

			let selectedAnswers = [];
			let questionIsCorrect = true;

			// zoek alle geselecteerde antwoorden
			for(let answer of answers){
				const selected = answer.querySelector('input[type=checkbox]').checked;
				if(selected){
					selectedAnswers.push(answer.querySelector('label').innerText);
				}
			}

			console.log(selectedAnswers);

			// er moet een correct aantal antwoorden geselecteerd zijn
			if(selectedAnswers.length != q.correctAnswers.length){
				questionIsCorrect = false;
			} else {
				for(let index in selectedAnswers){
					// dit gaat over de index itereren 0 - 1 - 2 - 3
					if(selectedAnswers[index] != q.correctAnswers[index]){
						questionIsCorrect = false;
						break;
					}
				}
			}

			if(questionIsCorrect){
				score ++;
			}
		}

		// ga naar de volgende vraag
		currentQuestion++;
		console.log(score);
		nextQuestion();
	});


})();