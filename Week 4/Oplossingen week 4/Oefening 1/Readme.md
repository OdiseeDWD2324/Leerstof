# Oefening 1

Maak een quiz applicatie.

Voor deze quiz applicatie gaan we op een specifieke manier te werk. We werken met 2 pagina's. Op de ene pagina creëer je de quiz. Op de andere pagina kan je de quiz uitvoeren.

## Pagina 1

Je voorziet een pagina waar je een json-bestand genereert met quiz vragen. Dit json bestand heeft onderstaande vorm:

```json
{
  "questions": [
    { "question": "1+1", "answer": "2", "type": "open" },
    {
      "question": "Waarvoor staat JSON",
      "answerOptions": [
        "Javascript object notatie",
        "Java Object Notation",
        "JavaScript Object Normalization",
        "JavaScript Object-Oriented Notation"
      ],
      "correctAnswers": ["Javascript object notatie"],
      "type": "multiple"
    }
  ],
  "numberOfQuestions": 2
}
```

Deze json code wordt na elke vraag dat je toevoegt geüpdatet in het textarea veld.

De html voor deze pagina is reeds voorzien + een beetje hulp js code voor multiple choice vragen.

Je schrijft zelf nog de code:

- Om de juiste inputvelden te tonen op basis van het gekozen vraag type
- Om op basis van de ingevulde inputvelden de nodige json te generen.
- De velden leeg te maken nadat er een vraag is toegevoegd

## Pagina 2

Dit is een pagina waarbij de quiz kan worden uitgevoerd op basis van de gegenereerde json. Je plakt de json code in het textarea veld. Wanneer je op start klikt wordt elke vraag overlopen. Na de laatste vraag krijg je je score te zien.

Ook hier is de html code voorzien. Je schrijft alle nodige js code.

## Uitbreiding

Het is natuurlijk geen slim idee om jsoncode in te laden waar het antwoord reeds in staat. Als uitbreiding zou je de json code kunnen encrypteren. Dit kan je doen met behulp van de library CryptoJS.
