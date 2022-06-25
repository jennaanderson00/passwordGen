// click event for generateBtn
var boxes = document.getElementById('inclDiv');
var createBtn = document.getElementById('createBtn');
var genBtn = document.getElementById('generateBtn');

boxes.style.display = "none";
createBtn.style.display = "none";

function displayChoices() {
  if (boxes.style.display === "none" && createBtn.style.display === "none") {
    boxes.style.display = "block";
    createBtn.style.display = "block";
    genBtn.style.display = "none";
  } else {
    boxes.style.display = "none";
    createBtn.style.display = "none";
  }
}

// function to shuffle array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
};
  
// creates array of 5 random numbers between 0 and 9
var ranNumArr = [];
for (let i = 0; i <5; i++) {
    var numGen = Math.floor(Math.random() * 10)
    ranNumArr.push(JSON.stringify(numGen));
}
  
// creates random array of special characters
var spcCharArr = ['!', `"`, `'`, '?', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
var ranSpcCharArr = shuffle(spcCharArr);
var generateSpcChar = ranSpcCharArr.slice(26);
  
// creates random array of lowercase letters
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lcArrRan = shuffle(lowercaseArr);
var generateLcRan = lcArrRan.slice(21);
  
// creates random array of uppercase letters
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var ucArrRan = shuffle(uppercaseArr);
var generateUcRan = ucArrRan.slice(21);
  
// generate string of lowercase letters
var lcOnly = lcArrRan.slice(6);
  
// generate string of uppercase letters
var ucOnly = ucArrRan.slice(6);
  
// generate string of numbers
var ranNumArr1 = [];
for (let i = 0; i < 20; i++) {
    var numGen1 = Math.floor(Math.random() * 10)
    ranNumArr1.push(JSON.stringify(numGen1));
}
  
// generate string of special characters
var spcOnly = ranSpcCharArr.slice(11);
  
// generate string of lowercase and uppercase letters
var lc10 = lcArrRan.slice(16);
var uc10 = ucArrRan.slice(16);
var lcUc1 = lc10.concat(uc10);
var lcUc2 = shuffle(lcUc1);
  
// generate string of lowercase letters and numbers
var ranNumArr2 = [];
for (let i = 0; i <10; i++) {
    var numGen2 = Math.floor(Math.random() * 10)
    ranNumArr2.push(JSON.stringify(numGen2));
}
var lcNum1 = lc10.concat(ranNumArr2);
var lcNum2 = shuffle(lcNum1);
  
// generate string of lowercase letters and special characters
var spc10 = ranSpcCharArr.slice(16);
var lcSpc1 = lc10.concat(spc10);
var lcSpc2 = shuffle(lcSpc1);
  
// generate string of uppercase letters and numbers
var ucNum1 = ranNumArr2.concat(uc10);
var ucNum2 = shuffle(ucNum1);
  
// generate string of uppercase letters and special characters
var ucSpc1 = uc10.concat(spc10);
var ucSpc2 = shuffle(ucSpc1);
  
// generate string of numbers and special characters
var numSpc1 = ranNumArr2.concat(spc10);
var numSpc2 = shuffle(numSpc1);
  
// enerate string of lowercase letters, uppercase letters, and numbers
var lcUcNum1 = lc10.concat(generateUcRan).concat(ranNumArr);
var lcUcNum2 = shuffle(lcUcNum1);
  
// generate string of lowercase letters, uppercase letters, and special characters
var lcUcSpc1 = lc10.concat(generateUcRan).concat(generateSpcChar);
var lcUcSpc2 = shuffle(lcUcSpc1);
  
// generate string of uppercase letters, numbers, and special characters
var ucNumSpc1 = uc10.concat(ranNumArr).concat(generateSpcChar);
var ucNumSpc2 = shuffle(ucNumSpc1);
  
// generate string of lowercase letters, numbers, and special characters
var lcNumSpc1 = lc10.concat(ranNumArr).concat(generateSpcChar);
var lcNumSpc2 = shuffle(lcNumSpc1);
  
// generate a string of lowercase letters, uppercase letters, numbers, and special characters
var combinedArr = generateLcRan.concat(generateUcRan).concat(generateSpcChar).concat(ranNumArr);
var ranCombinedArr = shuffle(combinedArr);

var lcBox = document.getElementById('lc');
var ucBox = document.getElementById('uc');
var numBox = document.getElementById('num');
var spcBox = document.getElementById('spc');
var output = document.getElementById('generatedPass');
var btn = document.getElementById('createBtn');

// returns password based on criteria
function generatePassword() {
  if (lcBox.checked && ucBox.checked === false && numBox.checked === false && spcBox.checked === false) {
    output.innerText = lcOnly.join('');
  } else if (lcBox.checked === false && ucBox.checked && numBox.checked === false && spcBox.checked === false) {
    output.innerText = ucOnly.join('');
  } else if (lcBox.checked === false && ucBox.checked === false && numBox.checked && spcBox.checked === false) {
    output.innerText = ranNumArr1.join('');
  } else if (lcBox.checked === false && ucBox.checked === false && numBox.checked === false && spcBox.checked) {
    output.innerText = spcOnly.join('');
  } else if (lcBox.checked && ucBox.checked && numBox.checked === false && spcBox.checked === false) {
    output.innerText = lcUc2.join('');
  } else if (lcBox.checked && ucBox.checked === false && numBox.checked && spcBox.checked === false) {
    output.innerText = lcNum2.join('');
  } else if (lcBox.checked && ucBox.checked === false && numBox.checked === false && spcBox.checked) {
    output.innerText = lcSpc2.join('');
  } else if (lcBox.checked === false && ucBox.checked && numBox.checked && spcBox.checked === false) {
    output.innerText = ucNum2.join('');
  } else if (lcBox.checked === false && ucBox.checked && numBox.checked === false && spcBox.checked) {
    output.innerText = ucSpc2.join('');
  } else if (lcBox.checked === false && ucBox.checked === false && numBox.checked && spcBox.checked) {
    output.innerText = numSpc2.join('');
  } else if (lcBox.checked && ucBox.checked && numBox.checked && spcBox.checked === false) {
    output.innerText = lcUcNum2.join('');
  } else if (lcBox.checked && ucBox.checked && numBox.checked === false && spcBox.checked) {
    output.innerText = lcUcSpc2.join('');
  } else if (lcBox.checked === false && ucBox.checked && numBox.checked && spcBox.checked) {
    output.innerText = ucNumSpc2.join('');
  } else if (lcBox.checked && ucBox.checked === false && numBox.checked && spcBox.checked) {
    output.innerText = lcNumSpc2.join('');
  } else if (lcBox.checked && ucBox.checked && numBox.checked && spcBox.checked) {
    output.innerText = ranCombinedArr.join('');
  }
}

btn.onclick = generatePassword;