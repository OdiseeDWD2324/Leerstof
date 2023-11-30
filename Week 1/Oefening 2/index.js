(function(){

    let priemgetallen = [];
    let numberToFind = 5;
    
    let nextPriemgetal = 1; // als er nog geen priemgetallen zijn, begin vanaf 1
    if(priemgetallen.length > 0){
        nextPriemgetal = priemgetallen[priemgetallen.length-1];
    }

    for(let i = 0; i < numberToFind; i++){
        // laatste priemgetal
        let isPriemgetal = false;
        do{
            // verhoog het priemgetal met 1
            nextPriemgetal++;
            console.log("probeer getal: " +  nextPriemgetal);

            // is het nu een priemgetal? we veronderstellen in het begin van wel
            isPriemgetal = true;
            
            // Om te valideren of een getal een priemgetal is
            // kan je het getal delen door alle voorgaande priemgetallen --> de for lus
            for(let priemgetal of priemgetallen){
                // de rest na deling voor alle priemgetallen niet 0 is, dan is het getal een priemgetal.
                if(nextPriemgetal % priemgetal == 0){
                    // van zordra het deelbaar is, dan is het geen priemgetal meer
                    isPriemgetal = false;
                }
            }

            //break; // stop de lus

        } while(!isPriemgetal);

        priemgetallen.push(nextPriemgetal);
    }

    console.log("eindresultaat: " + priemgetallen);

})();