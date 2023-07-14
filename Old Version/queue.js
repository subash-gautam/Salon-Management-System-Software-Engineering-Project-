const initLook = document.querySelector("#initLook");
const afterToken = document.querySelector('#afterToken');
const appToken = document.querySelector('#appToken');
const apply = document.querySelector('#apply');
const applyToken = document.querySelector('#applyToken');
const moNumber = document.querySelector('#moNumber');
const checkStyles = document.querySelector('#checkStyles');
const checkStatus = document.querySelector('#checkStatus');
const chooseStyle = document.querySelector('#chooseStyle');
const payment = document.querySelector('#payment');

appToken.addEventListener('click', function(){
    userToken();
});

// functions yata
function userToken(){
    initLook.innerHTML = `<form>
        <label for="name">Name: </label><br>
        <input type="text" id="name"><br>
        <label for="email">Enter email or phone number: </label><br>
        <input type="text" id = "email"><br>
        <button type="submit" id="submitForToken" >Apply for Token</button>
    </form>`;
    document.getElementById('submitForToken').addEventListener('click', function(evt){
        evt.preventDefault();
        registerUser();
    });
}

function registerUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
}
