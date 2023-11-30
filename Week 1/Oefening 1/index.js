(function(){

    // dit is je main-functie van dit bestand

    let huidigeTijd = new Date();

    //vb aantal uren is 4

    if(huidigeTijd.getHours() < 6){
        console.log('amai zo vroeg');
    } else if(huidigeTijd.getHours() < 12){
        console.log('goeiemorgen');
    } else if(huidigeTijd.getHours() < 18){
        console.log('goeienamiddag');
    } else {
        console.log('slaapwel');
    }
})();