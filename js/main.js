function generatePassword() {
    const useLowercase = document.querySelector('input[name=lower]').checked;
    const useUppercase = document.querySelector('input[name=upper]').checked;
    const useNumbers = document.querySelector('input[name=numbers]').checked;
    const useSepcialCharacters = document.querySelector('input[name=special]').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+';

    let availableChars = '';

    if(useLowercase){
        availableChars += lowercaseChars;
    }

    if(useUppercase){
        availableChars += uppercaseChars;
    }

    if(useNumbers){
        availableChars += numberChars;
    }

    if(useSepcialCharacters){
        availableChars += specialChars;
    }

    let password = '';
    const passwordLength = document.querySelector('input[name=numChars]').value;

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    document.getElementById('passOutput').innerText = password;
}

async function copyPassword(){
    const textToCopy = document.getElementById('passOutput').innerText;

    try{
        await navigator.clipboard.writeText(textToCopy);
        alert('Copied!');
    } catch(err){
        alert('Not copied!');
    }
}