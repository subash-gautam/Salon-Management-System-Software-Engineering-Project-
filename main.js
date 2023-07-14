(function(){
    "use strict";

    { // variable declaration
        var demos = document.getElementById('demos');
        var logInPannel = document.getElementById('logInPannel');
    }

    {// function calls
    initialHTMLFillUp();
    }

    // Function Haru Yata
    function initialHTMLFillUp(){
        document.getElementById('header').innerHTML = `<h1>Salon Management System</h1>`;
        demos.innerHTML = 'Empty demo section.';
        logInPannel.innerHTML = `<div id="logInDiv"><button id="booking">Book Now</button>
        <button id="userLogin">Log In</button>
        <button id="barberLogin">Barber Login</button></div>`;

        document.getElementById('barberLogin').addEventListener('click', function(){
            barberLogin();
        });  
        document.getElementById('userLogin').addEventListener('click', function(){
            login();
        });  
        document.getElementById('booking').addEventListener('click', function(){
            booking();
        });  
    }
    function barberLogin(){
        console.log("This is barber login function");
    }
    function login(){
        console.log("This is user login function");
    }
    function booking(){
        console.log("This is booking function");
    }
})();