
const submitButton = document.querySelector('#submitButton');
const password = document.querySelector('#password');
const copyButton = document.querySelector('#copyButton');

//Creates random password
const randomPass = (len) => {
    let password = '';
    for(let i = 0; i <= len - 1; i++){
        let ran = Math.floor(Math.random() * 78) + 48;
        password = password + String.fromCharCode(ran);
    };
    return password;
};

//event listener for generate button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const length = document.querySelector('#length').value;
    if(!length || length < 1){
        alert('Password needs to be between at least 4 characters!')
        return;
    }
    const pass = randomPass(length);
    password.innerText = pass;
})

//Copies password to clipboard
function copyFunc () {
    const tempEle = document.createElement('textarea');
    tempEle.value = password.innerText;
    document.body.appendChild(tempEle);
    tempEle.select();
    document.execCommand('copy');
    document.body.removeChild(tempEle);
};

//event listener for copy button
copyButton.addEventListener('click', (e) => {
    e.preventDefault();
    copyFunc();
})