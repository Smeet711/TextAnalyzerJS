let charcount = document.getElementById("char");
let wordcount = document.getElementById("word");
let sentence = document.getElementById("sent");
let spaces = document.getElementById("space");
let punctuation = document.getElementById("punch");

const textarea = document.querySelector(".text-entry textarea"),
processbtn = document.getElementById("processbtn");

let UIvalues = [charcount,wordcount,sentence,spaces,punctuation];


function init(){
    UIvalues.forEach(value => value.innerHTML = 0);

}

init();

processbtn.addEventListener("click",() =>{
    let text = textarea.value;
    charcount.innerHTML = text.length;
    wordcount.innerHTML = findWord(text);
    sentence.innerHTML = findsent(text);
    spaces.innerHTML = text.split(" ").length- 1;
    //punctuation.innerHTML = te
})
//
//
//
//
 function findWord(text){
let temptext = text.replace(/[.,!%&*;:'"-()]/g, "");
temptext = temptext.replace(/[\r]/g, "").split(/\n/);

let tempList = [];
temptext.forEach(word => tempList.push(word.split(" ")));

function extract(arr){
    return arr.reduce((wordList,word)=> {

return wordList.concat(Array.isArray(word) ? extract (word) : word);

    } ,[])
}
let wordList = extract(tempList);
return wordList.filter(char => char != '').length;

}
//
//
//


//

 function findsent(text){

const reges = /[\w|\)][.?!](\s|$)/g;
let sencount = text.match(reges);
return sencount ? sencount.length : 0;


}


