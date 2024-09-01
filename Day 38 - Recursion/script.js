function generateFibonacci() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number < 1) {
        console.error('Please enter a valid number greater than 0');
        return;
    }

    const fibonacci = [];
    let a = 0, b = 1;

    for (let i = 0; i < number; i++) {
        fibonacci.push(a);
        [a, b] = [b, a + b];
    }

    console.log('Fibonacci Series:', fibonacci);
}

// =====================================
// Explanation
// HTML: Provides an input field and a button. The button calls the generateFibonacci function when clicked.
// CSS: Styles the page for a cleaner look (optional).
// JavaScript: The generateFibonacci function reads the number from the input field, calculates the Fibonacci series, and logs it to the console.
// To use this code, simply save it as an HTML file and open it in a web browser. Enter a number in the input field, click the button, and check the browser's console to see the Fibonacci series.


// ======================================

// Question 2: Create a variable that stores a string and check whether the string is a palindrome.
function checkPalindrome() {
    const str = document.getElementById('stringInput').value;
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    const isPalindrome = cleanedStr === reversedStr;
    
    document.getElementById('result').textContent = isPalindrome ? 'The string is a palindrome.' : 'The string is not a palindrome.';
}

// Explanation
// HTML: Creates an input field for the string and a button to check if it’s a palindrome. There's also a paragraph to display the result.
// CSS: Adds some basic styling.
// JavaScript:
// str: Gets the value from the input field.
// cleanedStr: Removes non-alphanumeric characters and converts the string to lowercase for a case-insensitive comparison.
// reversedStr: Reverses the cleaned string.
// Compares cleanedStr and reversedStr to check if they are the same.
// Displays the result in the <p> element.