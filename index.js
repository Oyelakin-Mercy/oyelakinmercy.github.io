let answer1 = document.querySelector("#hori1");
let answer2 = document.querySelector("#hori2");
let answer3 = document.querySelector("#hori3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name.value);
    answer2.textContent = getLower(name.value);
    answer3.textContent = getUpper(name.value);
});

function getNumberOfChars(name) {
    // return the number of characters in: name
   return name.length
}



function getLower(name) {
    // return name all in lower case (example: "ABC" becomes "abc")
return name.toLowerCase()
}


function getUpper(name) {
    // return name all in upper case (example: "abc" becomes "ABC")
return name.toUpperCase()
}

