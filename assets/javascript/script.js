var generateBtn = document.querySelector("#generate");

function generateRandomChar(charsToUse) {
    const randomIndex = Math.floor(Math.random() * charsToUse.length);
    return charsToUse.charAt(randomIndex);
}

// generates a password between 8 and 128 characters
function generatePassword() {
    var passLength = prompt(
        "How long do you want your password to be between 8 and 128 characters?",
    );
    while (passLength < 8 || passLength > 128) {
        alert("Invalid length. Must be between 8 and 128 characters.");
        passLength = prompt(
            "How long do you want your password to be between 8 and 128 characters?",
        );
    }
    // the options for characters to use
    var charsToUse = "abcdefghijklmnopqrstuvwxyz";
    const charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsSpecial = "!@#$%^&*()_-+=";
    const charsNumber = "0123456789";

    if (window.confirm("Do you want upper case characters?")) {
        charsToUse += charsUpper;
    }

    if (window.confirm("Do you want special characters?")) {
        charsToUse += charsSpecial;
    }

    if (window.confirm("Do you want numbers?")) {
        charsToUse += charsNumber;
    }

    // making empty string and adding in the characters based off selection above
    var pass = "";
    for (let i = 0; i < passLength; i++) {
        const randomCharacter = generateRandomChar(charsToUse);
        pass += randomCharacter;
    }
    return pass;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
