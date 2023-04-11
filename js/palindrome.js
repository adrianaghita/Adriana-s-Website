
document.getElementById('palindrome__btn').addEventListener('click', 
function isPalindrome () {
    let inputValue = document.getElementById('palindrome__textInput').value;
    let filterInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
    let inputValueReversed = filterInput.split('').reverse().join("");
    if (filterInput === inputValueReversed) document.getElementById('palindrome__output').innerHTML = `"${inputValue}" it's a palindrome!`
    else document.getElementById('palindrome__output').innerHTML = `"${inputValue}" it's not a palindrome!`
    
    
})


