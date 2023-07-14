var admin = 'barber', passkey = 'password';
var incorrect = document.getElementById('incorrect');
var username, password;

document.getElementById("submit").addEventListener('click', function(evt){
    evt.preventDefault();
    username = document.querySelector('#id').value;
    password = document.querySelector('#password').value;
    login();
});

// Function haru yata xan
function login(){
    console.log("User name : "+ username + "\nPassword: "+ password);
    if(1 || admin == username){ 
        if(1 || passkey == password){
            document.getElementsByTagName('form')[0].style.display = "none";
            adminPannel();
        }
        else{
            incorrect.innerHTML = "Incorrect password entered !!";
            document.getElementById('submit').innerHTML = 'Retry';
        }
    }else{
            incorrect.innerHTML = "username or password is not correct!!";
            document.getElementById('submit').innerHTML = 'Retry';
    }
}

function adminPannel(){
    var pannel = document.getElementById('adminPannel');
    pannel.innerHTML = `<table>
        <thead>
            <td id = "sn" >Queue number</td>
            <td id = "nameOnList" >Name</td>
            <td id = "emailOnList" >Email(/phone)</td>
            <td id = "hairStyleOnList" >Hair Style</td>
            <td id = "queueStatus" >Status</td>
            <td>Payment Status</td>
            <td id = "queueAction">Action</td>
        </thead>
        <tbody></tbody>
    </table>`;

}