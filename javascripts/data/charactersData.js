import {setCharacters, charactersBuilder} from '../components/characters.js'

function executeThisCodeAFterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();
};

function executeThisCodeIfXhrFails () {
    console.log('shit broke');
};

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAFterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

export { getCharacters };