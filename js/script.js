let userEmail;
let userPassword;
let errors ;
let tryCount = 3;
let isValide

do {
    debugger
    tryCount = tryCount - 1;
    errors = ``;
    userEmail = prompt(`Enter your Email`);
    userPassword = prompt(`Enter your Password`);
        
    if (userEmail.endsWith(".com") == false) {
        errors = `email should ends with .com,`;
    }
    if (userEmail.includes("@") == 0) {
        errors = ` ${errors} email should include one @,`;
    }
    if (userEmail.startsWith("@") == true || userEmail.endsWith("@") == true) {
        errors = ` ${errors} email should not start or end with @,`;
    }
    if (userPassword.search(/[A-Z]/g) == -1) {
        errors = `${errors} password should contain at least one uppercase letter,`;
    }
    if (userPassword.length < 4 || userPassword.length > 12) {
        errors = `${errors}password should be longer than 4 symbols but shorter than 12.`;
    }

        if (errors == false) {
        tryCount = tryCount - tryCount;
        isValide = true;
    } else {
        alert(errors);
        if (tryCount == 0) {
        alert(`no tries left!`);
        isValide = false;
        } else {
        alert(`tries left: ${tryCount}`);
    }
    }
    if (tryCount == 0) {
        errors = false;
    }
} while (tryCount > 0 || errors);
if (isValide == true) {
    document.write(`Account successfully registered! User email: ${userEmail}, User password: ${userPassword}`);
} else {
    document.write(`Registration failed, try again later`)
}



