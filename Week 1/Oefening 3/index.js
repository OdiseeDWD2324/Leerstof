const woordenboek = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
}

function toMorse(tekst){
    let morsecode = "";

    // vertaal elke letter met de bovenstaande tabel/object
    for(let letter of tekst){
        morsecode += woordenboek[letter] + "|";
    }

    return morsecode;
}

function fromMorse(morsecode){
    let tekst = "";

    for(let letterCode of morsecode.split('|')){
        for(let letter in woordenboek){
            if(woordenboek[letter] == letterCode){
                tekst += letter;
            }
        }
    }

    return tekst;
}

(function(){
    let input = "ABCABEF";

    let morse = toMorse(input);
    let output = fromMorse(morse);

    console.log(input);
    console.log(morse);
    console.log(output);
})();