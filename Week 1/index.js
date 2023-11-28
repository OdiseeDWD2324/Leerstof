console.log('hello" world');

// variabelen
const constante = 5;
let variabele;
console.log(variabele);

// const is constant, waarde kan niet meer aangepast worden
//constante = variabele;
// dit gaat wel want het is een variabele
variabele = constante;
// dit willen we vermijden, gebruik dit niet tenzij het niet anders kan
var oudereVariabele = 10;

variabele ++;
variabele --;
variabele = 10+5;
variabele = 10* 5;
variabele *= 5;   // variabele = variabele * 5

variabele = '10';
let variabele2 = 5;

variabele2 = variabele + variabele2;

let ditIsEenVoorbeeldVanGoedeNaamgeving;

console.log(variabele);
console.log(variabele2);

// Arrays
console.log('arrays');
const rij = [1, 2, 3, 4];

rij.push(5); // voeg 5 op het einde toe
rij.unshift(0); // voeg 0 aan het begin toe

// dit gaat niet want de rij is een constante, de rij manipuleren kan maar volledig overschrijven niet
//rij = 5;
console.log(rij.pop());
console.log(rij.shift());

console.log('lengte ' + rij.length);

rij.push('test');

console.log(rij);

// Object
console.log('objects');

// object notatie
const obj = new Object();
obj.naam = 'baetens';
obj.firstname = 'jens';

// dict/json notatie
let obj2 = {
	naam: 'testnaam',
	blabla: 'blalbla',
	key1: 'value1',
	key2: 'value2',
	key3: []
};

console.log('search');
console.log(obj2['key1']);

obj2['property'] = 'test';
obj2.naam = obj2.naam + ' ' + obj['naam']; // deze lijn is niet goed maar is om aan te geven dat je ze door elkaar kunt gebruiken

console.log(obj);
console.log(obj2);

// Controlestructuren
console.log('ifs');
if(rij[0]==10){
	console.log('eerste element is 10');
} else {
	console.log('eerste element is niet 10');
}

for(let i = 0; i < 10; i++){
	console.log(i);
}

let i = 0;
while(i<10){
	console.log(i);
	i++;
}

do{
	// bij de do-while wordt dit eerst uitgevoerd en dan pas de while gechecked, dit wil dus zeggen dat het minstens 1 keer uitgevoerd wordt
	console.log(i);
	i++;
} while(i<10);

// op rij of object heb je een foreach (typisch doe je dit op een array)
rij.forEach(element => {
	console.log('element ' + element*2);
});

// for in - hiermee ga je de linkerleft overlopen van een object (de keys) of de indices in een rij
console.log(rij);
for(let ele in rij){
	console.log('in ' + ele);
}

for(let ele in obj){
	console.log('in ' + ele);
}

// for of
for(let ele of rij){
	console.log('of ' + ele);
}
// dit gaat niet gaan, object heeft de indices nodig
/*for(let ele of obj){
	console.log('of ' + ele);
}*/

if(obj.definedProperty){
	console.log('property is defined');
} else {
	console.log('property is undefined');
}

// functies
function test(naam){
	console.log(naam);
	return 5;
}

let tmp = test('jens');
console.log(tmp);

// self-invoking functie
// dit is de beste manier om met javascript te werken
(function(){
	// alle lets die we hier definieren zijn enkel geldig hierbinnen
	// dit zorgt dat we veiliger kunnenw werken
	// hierin plaatsen we eigenlijk alle code die bij de start uitgevoerd wordt
	// dit kan je zien als je main functie
	console.log('self invoking function');
	// functies buiten de self invoking function kunnen uitgevoerd worden (als ze erboven staan)
	test('test2');
})();
//dit willen we enkel binnen de self-invoking functie hebben
let tljdkfj = 5;
// functies aanmaken mag erbuiten, maar moeten boven de self-invoking functie staan 
function f2(){
	console.log();
}