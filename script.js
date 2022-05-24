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
  
// generate array of 5 random numbers between 0 and 9
var ranNumArr = [];
for (let i = 0; i <5; i++) {
    var numGen = Math.floor(Math.random() * 10)
    ranNumArr.push(JSON.stringify(numGen));
}
  
// generate random array of special characters
var spcCharArr = ['!', `"`, `'`, '?', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
var ranSpcCharArr = shuffle(spcCharArr);
var generateSpcChar = ranSpcCharArr.slice(26);
  
// generate random array of lowercase letters
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lcArrRan = shuffle(lowercaseArr);
var generateLcRan = lcArrRan.slice(21);
  
// generate random array of uppercase letters
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var ucArrRan = shuffle(uppercaseArr);
var generateUcRan = ucArrRan.slice(21);
  
// include lowercase letters
var lcOnly = lcArrRan.slice(6);
// console.log(lcOnly.join(''));
  
// include uppercase letters
var ucOnly = ucArrRan.slice(6);
// console.log(ucOnly.join(''));
  
// include numbers
var ranNumArr1 = [];
for (let i = 0; i < 20; i++) {
    var numGen1 = Math.floor(Math.random() * 10)
    ranNumArr1.push(JSON.stringify(numGen1));
}
// console.log(ranNumArr1.join(''));
  
// include special characters
var spcOnly = ranSpcCharArr.slice(11);
// console.log(spcOnly.join(''));
  
// include lc and uc
var lc10 = lcArrRan.slice(16);
var uc10 = ucArrRan.slice(16);
var lcUc1 = lc10.concat(uc10);
var lcUc2 = shuffle(lcUc1);
// console.log(lcUc2.join(''));
  
// include lc and num
var ranNumArr2 = [];
for (let i = 0; i <10; i++) {
    var numGen2 = Math.floor(Math.random() * 10)
    ranNumArr2.push(JSON.stringify(numGen2));
}
var lcNum1 = lc10.concat(ranNumArr2);
var lcNum2 = shuffle(lcNum1);
// console.log(lcNum2.join('')); 
  
// include lc and spc
var spc10 = ranSpcCharArr.slice(16);
var lcSpc1 = lc10.concat(spc10);
var lcSpc2 = shuffle(lcSpc1);
// console.log(lcSpc2.join(''));
  
// include uc and num
var ucNum1 = ranNumArr2.concat(uc10);
var ucNum2 = shuffle(ucNum1);
// console.log(ucNum2.join(''));
  
// include uc and spc
var ucSpc1 = uc10.concat(spc10);
var ucSpc2 = shuffle(ucSpc1);
// console.log(ucSpc2.join(''));
  
// include num and spc
var numSpc1 = ranNumArr2.concat(spc10);
var numSpc2 = shuffle(numSpc1);
// console.log(numSpc2.join(''));
  
// include lc, uc, and num
var lcUcNum1 = lc10.concat(generateUcRan).concat(ranNumArr);
var lcUcNum2 = shuffle(lcUcNum1);
// console.log(lcUcNum2.join(''));
  
// include lc, uc, and spc
var lcUcSpc1 = lc10.concat(generateUcRan).concat(generateSpcChar);
var lcUcSpc2 = shuffle(lcUcSpc1);
// console.log(lcUcSpc2.join(''));
  
// include uc, num, and spc
var ucNumSpc1 = uc10.concat(ranNumArr).concat(generateSpcChar);
var ucNumSpc2 = shuffle(ucNumSpc1);
// console.log(ucNumSpc2.join(''));
  
// include num, lc, and spc
var lcNumSpc1 = lc10.concat(ranNumArr).concat(generateSpcChar);
var lcNumSpc2 = shuffle(lcNumSpc1);
// console.log(lcNumSpc2.join(''));
  
// include all
var combinedArr = generateLcRan.concat(generateUcRan).concat(generateSpcChar).concat(ranNumArr);
var ranCombinedArr = shuffle(combinedArr);
console.log(ranCombinedArr.join(''));

function generatePassword() {
    if (document.getElementById('lc').checked === true) {
        document.getElementById('generatedPass').innerHTML = lcOnly.join('');
    }
    // if (document.getElementById('lc').checked && document.getElementById('uc').checked === false && document.getElementById('num').checked === false && document.getElementById('spc').checked === false) {
    //     document.getElementById('generatedPass').innerHTML = lcOnly.join('');
    // } else if (document.getElementById('lc').checked === false && document.getElementById('uc').checked === true && document.getElementById('num').checked === false && document.getElementById('spc').checked === false) {
    //     document.getElementById('generatedPass').innerHTML = ucOnly.join('');
    // } else if (document.getElementById('lc').checked === false && document.getElementById('uc').checked === false && document.getElementById('num').checked === true && document.getElementById('spc').checked === false) {
    //     document.getElementById('generatedPass').innerHTML = ranNumArr1.join('');
    // }
};

document.getElementById('createBtn').onclick = generatePassword();