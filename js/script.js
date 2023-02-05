let userEmail = prompt('Enter your email')
let userPassword = prompt('Enter your password') 
let errors
let tryCount = 3
/* login */
if (userEmail.endsWith('.com') == false) {
    errors = 'email should end with .com,'
} else if(userEmail.includes('@') == 0){
    errors = 'email should include one @,'
} else if (userEmail.startsWith('@') == true) {
    errors = 'email should not start with @,'
} else if (userEmail.endsWith('@') == true) {
    errors = 'email shoud not end with @'
} else if (userEmail.length > 15) {
    errors = 'email lenght should not be more than 15 symbols,'
} else {
    errors = true
}
/* password */
if (userPassword.charAt(0).charCodeAt() < 65 || userPassword.charAt(0).charCodeAt() > 90) {
    errors =  'password should start with big letter'
} else if(userPassword.length < 4 || userPassword.length > 12){
    errors = 'password should be longer than 4 symbols or shorter than 12 symbols'
} else {
errors = true
} 

while (tryCount > 0 || (errors)) {

    tryCount = tryCount - 1
} 



