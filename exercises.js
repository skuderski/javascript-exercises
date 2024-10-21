
function add (x) {
    return x+7
}

var result = add(10)

console.log(result)


function multiply (x, y) {
    return x*y
}

let meme = multiply(10, 20)

console.log(meme)

function capitalize (word) {

if (word.length === 0) {
    return "";
}
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

let niceWord = capitalize("ksabwa2@SF2sfqwg")

console.log(niceWord)


function lastLetter (letter) {
    return letter.charAt(letter.length - 1);
}

let results = lastLetter("SFQWGQsifjais")

console.log(results)