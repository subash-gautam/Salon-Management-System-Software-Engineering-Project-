// IIFE
(function(){
    "use strict";
    
// variable declaration
    const demos = document.getElementById('demos');
    const logInPannel = document.getElementById('logInPannel');
    var main = document.getElementsByTagName('main')[0];
    const admin = 'barber', passkey = 'password';
    const incorrect = document.getElementById('incorrect');
    var username, password;
    const basicStyles = document.querySelectorAll('.thumbnail-image')[0];
    const specialStyles = document.querySelectorAll('.thumbnail-image')[1];
    const beardStyles = document.querySelectorAll('.thumbnail-image')[2];
    home();

    document.getElementById('homeIcon').addEventListener('click', function(){
        console.log("Home button clicked.");
        home();
    });
    document.getElementById('barberLogin').addEventListener('click', function(){
        barberLogin();
    });  
    document.getElementById('userLogin').addEventListener('click', function(){
        login();
    });  
    document.getElementById('booking').addEventListener('click', function(){
        booking();
    });
    document.getElementById('barberInfo').addEventListener('click', function(){
        main.innerHTML = `<h1>Barber Introduction</h1>
        <h2>Name: Nabin Kumar Sah</h2>
        <h2>Address: Pokhara - 16, Lamachaur, Seti Khola ko bagar mai</h2>
        <h2>Salon Address: in front of WRC</h2>
        <h2>Experience: 12 years only</h2>
        <img src="images/barber.jpg" alt="barber">`;
    });
    
    // Function Haru Yata
    function home(){
        document.getElementById('header').innerHTML = `<img src="images/Home.png" alt="Home" id="homeIcon"><h1>Salon Management System</h1>`;
        logInPannel.innerHTML = `<div id="logInDiv"><button id="booking">Book Now</button>
        <button id="userLogin">Log In</button>
        <button id="barberInfo">About Barber</button>
        <button id="barberLogin">Barber Login</button></div>`;
    }
    function barberLogin(){
        main.innerHTML = `
            <form>
                <label for="id">ID:  <input type="text" id="id"></label>
                <label for="password">Password:  <input type="password" id="password" name="password"></label>
                <span id="incorrect">
                    <!-- Message on incorrect username or password dekhaaune -->
                </span>
                <button id="submit">Login</button>
            </form>
            <section id="adminPannel">
            </section>`;
            
            document.getElementById("submit").addEventListener('click', function(evt){
                evt.preventDefault();
                username = document.querySelector('#id').value;
                password = document.querySelector('#password').value;
                adminLoginConformation();
            });
    }
    function login(){
        console.log("This is user login function");
    }
    function booking(){
        console.log("This is booking function");
    }
    function adminLoginConformation(){
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
    basicStyles.addEventListener('click', function(){
        styleList(simple);
    });
    specialStyles.addEventListener('click', function(){
        styleList(special);
    });
    beardStyles.addEventListener('click', function(){
        styleList(beard);
    });
    function styleList(style){

    }
})();