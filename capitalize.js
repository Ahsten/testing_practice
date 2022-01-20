function capitalize(word){
   let capLetter = word.charAt(0).toUpperCase();
   let lower = word.substring(1).toLowerCase();
   return capLetter + lower;
}

module.exports = capitalize;