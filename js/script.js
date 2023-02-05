let userEmail = prompt("Enter your email");
let userPassword = prompt("Enter your password"); 
let errors
let tryCount = 3
/* uslovia
email
(userEmail.endsWith('.com') == false)
(userEmail.includes('@') == 0)
(userEmail.startsWith('@') == true)
(userEmail.endsWith('@') == true)
(userEmail.length > 15)
password
(userPassword.charAt(0).charCodeAt() < 65 || userPassword.charAt(0).charCodeAt() > 90)
(userPassword.length < 4 || userPassword.length > 12)
*/

    

do {
    tryCount = tryCount - 1
    if (userEmail.endsWith(".com") == false) {
        userEmail = prompt('your email should ends with .com')
    } else {
        errors = false
    }
    if (userEmail.includes("@") == 0) {
        userEmail = prompt("your email shoul contain at least one @");
    } else {
        errors = false;
    }
    if (userEmail.startsWith("@") == true || userEmail.endsWith("@") == true) {
        userEmail = prompt("your email shoul not starts or ends with @");
    } else {
        errors = false;
    }
    if (
        userPassword.charAt(0).charCodeAt() < 65 || userPassword.charAt(0).charCodeAt() > 90
    ) {
        userPassword = prompt("your password should start with big letter");
    } else {
        errors = false
    }
    if (userPassword.length < 4 || userPassword.length > 12) {
        userPassword = prompt("password length should be longer than 4 symbols but shorter than 12");
    } else {
        errors = false
    }
    if (tryCount == 0) {
        alert("no tries left");
    } else {
        alert(`tries left: ${tryCount}`);
    }
} while (tryCount > 0 || (errors))

document.write(`account successfully registered user email: ${userEmail}, user password: ${userPassword}`)