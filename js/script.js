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
    errors = ''
    if (userEmail.endsWith(".com") == false) {
        errors = "email should ends with .com";
        userEmail = prompt(`Enter your email, ${errors}`);
    } else {
        errors = false
    }
    if (userEmail.includes("@") == 0) {
        errors = "email should include one @";
        userEmail = prompt(`Enter your email, ${errors}`);
    } else {
        errors = false;
    }
    if (userEmail.startsWith("@") == true || userEmail.endsWith("@") == true) {
        errors = "email should not start or end with @";
        userEmail = prompt(`Enter your email, ${errors}`);
    } else {
        errors = false;
    }
    if (
        userPassword.charAt(0).charCodeAt() < 65 || userPassword.charAt(0).charCodeAt() > 90
    ) {
        errors = 'password should start with big letter'
        userPassword = prompt(`Enter your password, ${errors}`);
    } else {
        errors = false
    }
    if (userPassword.length < 4 || userPassword.length > 12) {
        errors = "password should be longer than 4 symbols but shorter than 12";
        userPassword = prompt(`Enter your password, ${errors}`);
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