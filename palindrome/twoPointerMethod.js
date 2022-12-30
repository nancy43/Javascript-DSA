//two pointer method for palindrome
function checkIsPalindrome(word) {
    if (word < 0) {
        return false
    }
    const string = word.toString() //if it's an integer then converting it to a string
    let left = 0
    let right = string.length - 1
    while (left < right) {
        if (string[left] !== string[right]) { //comparing the left and right pointers
            return ('Not a palindrome')
        }
        left++
        right--
    }
    return ('Is a palindrome')
}
console.log(checkIsPalindrome('121'))
