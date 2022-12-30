//string based palindrome solution
function checkIsPalindrome(word) {
    let convertedWord = word.toString().split('').reverse().join('');
   if (word == convertedWord){ //not using === because we need to check if they both are equal regardless of their type
       console.log(word,":is a palindrome")
   }
   else{
       console.log(word,":is not a palindrome")
   }

}
checkIsPalindrome('radar')

