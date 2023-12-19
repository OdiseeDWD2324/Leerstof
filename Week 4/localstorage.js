const persoon = localStorage.getItem('persoon');
const webshop = localStorage.getItem('webshop');

console.log(persoon);
console.log(JSON.parse(webshop));

const webshopObj = JSON.parse(webshop);
/*
// plaats de keys met de naam "naam" in naam
let {naam, producten} = webshopObj;

console.log(naam);
console.log(producten);
*/

// je kan zelf subelementen in een array in een aparte variabele plaatsen
// met een object gebruik je {} rond de variabelen
let {naam, producten:[a, b]} = webshopObj;

console.log(naam);
console.log(a);
console.log(b);

const numbers = [1,2,3,4,5,6,7];
// met een array gebruik je [] rond de variabelen
const [x,y,z, variabele] = numbers;

console.log(x,y,z,variabele);

function drawPoint(x, y){
	console.log(x, y);
}

drawPoint(100, 100);

const point = [100, 150];

// dit geeft niet het gewenste resultaat
drawPoint(point);
// met de spread operator wordt de array uitgespreid over de beschikbare/nodige variabelen
drawPoint(...point);
// bovenstaande is een alternatief voor
drawPoint(point[0], point[1]);

point.push(200);
point.push(300);
point.push(300);
// met twee extra variabelen in de lijst gaat het terug verkeerd
drawPoint(...point);

function drawPointMetRest(x, y, ...z){
	console.log('drawpoint met rest');
	console.log(x, y, z);
}

drawPointMetRest(...point);