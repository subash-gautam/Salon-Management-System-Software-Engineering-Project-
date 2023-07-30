// IIFE
(function everything() {
    "use strict";

    // variable declaration
    const demos = document.getElementById('demos');
    const logInPannel = document.getElementById('logInPannel');
    var main = document.getElementsByTagName('main')[0];
    const admin = 'barber', passkey = 'password';
    var username, password;

    insideMain();
    homePageClickHandler();

    document.getElementById('homeIcon').addEventListener('click', function () {
        console.log("Home button clicked.");
        insideMain();
        homePageClickHandler();
    });

    // Function Haru Yata
    function barberLogin() {
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

        document.getElementById("submit").addEventListener('click', function (evt) {
            evt.preventDefault();
            username = document.querySelector('#id').value;
            password = document.querySelector('#password').value;
            adminLoginConformation();
        });
    }

    function login() {
        fetchData();
    }

    function booking() {
        main.innerHTML = `<h1>Select A Style</h1>`;
        main.innerHTML += `<h2>Simple Styles</h2>`;
        for (let i = 0; i < 2; i++) {
            main.innerHTML += `<div class="thumbnail simpleDisplay">
                <div class="thumbnail-image">
                    <img src="images/simple${i + 1}.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Simple Hair Style${i + 1}</h3>
                    <button class="applyBtn">Select This</button>
                </div>
            </div>`;
        }
        main.innerHTML += `<h2>Special Styles</h2>`;
        for (let i = 0; i < 7; i++) {
            main.innerHTML += `<div class="thumbnail specialDisplay">
                <div class="thumbnail-image">
                    <img src="images/special${i + 1}.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Special Hair Style${i + 1}</h3>
                    <button class="applyBtn">Select This</button>
                </div>
            </div>`;
        }
        main.innerHTML += `<h2>Beard Styles</h2>`;
        for (let i = 0; i < 3; i++) {
            main.innerHTML += `<div class="thumbnail beardDisplay">
                <div class="thumbnail-image">
                    <img src="images/beard${i + 1}.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Beard Style${i + 1}</h3>
                    <button class="applyBtn">Select This</button>
                </div>
            </div>`;
        }
        for (let i = 0; i < 12; i++) {
            document.querySelectorAll('.applyBtn')[i].addEventListener('click', function () {
                registration();
            });
        }
    }

    function adminLoginConformation() {
        console.log("User name : " + username + "\nPassword: " + password);
        if (1 || admin == username) {
            if (1 || passkey == password) {
                document.getElementsByTagName('form')[0].style.display = "none";
                adminPannel();
            }
            else {
                incorrect.innerHTML = "Incorrect password entered !!";
                document.getElementById('submit').innerHTML = 'Retry';
            }
        } else {
            incorrect.innerHTML = "username or password is not correct!!";
            document.getElementById('submit').innerHTML = 'Retry';
        }
    }

    function adminPannel() {
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

    function insideMain() {
        main.innerHTML = `<section id="demos">
            <div class="thumbnail">
                <div class="thumbnail-image">
                    <img src="images/simple1.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Simple Hair Styles</h3>
                </div>
            </div>
            <div class="thumbnail">
                <div class="thumbnail-image">
                    <img src="images/special2.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Special Styles</h3>
                </div>
            </div>
            <div class="thumbnail">
                <div class="thumbnail-image">
                    <img src="images/beard1.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>Beard Styles</h3>
                </div>
            </div>
        </section>
        <section id="logInPannel">
            <div id="logInDiv"><button id="booking">Book Now</button>
            <button id="userLogin">Log In</button>
            <button id="barberInfo">About Barber</button>
            <button id="barberLogin">Barber Login</button></div>
        </section>`;

        document.getElementById('logInPannel').innerHTML = `<div id="logInDiv"><button id="booking">Book Now</button>
        <button id="userLogin">Log In</button>
        <button id="barberInfo">About Barber</button>
        <button id="barberLogin">Barber Login</button></div>`;
    }

    function homePageClickHandler() {
        document.querySelectorAll('.thumbnail-image')[0].addEventListener('click', function () {
            styleList(0);
        });

        document.querySelectorAll('.thumbnail-image')[1].addEventListener('click', function () {
            styleList(1);
        });

        document.querySelectorAll('.thumbnail-image')[2].addEventListener('click', function () {
            styleList(2);
        });

        document.getElementById('barberLogin').addEventListener('click', function () {
            barberLogin();
        });

        document.getElementById('userLogin').addEventListener('click', function () {
            login();
        });

        document.getElementById('booking').addEventListener('click', function () {
            booking();
        });

        document.getElementById('barberInfo').addEventListener('click', function () {
            main.innerHTML = `<div id="barberDetail">
                <div class="barberIntroduction">
                    <h1>Barber Introduction</h1>
                    <h2>Name: Nabin Kumar Sah</h2>
                    <h2>Address: Pokhara - 16, Lamachaur, Seti Khola ko bagar mai</h2>
                    <h2>Salon Address: in front of WRC</h2>
                    <h2>Experience: 12 years only</h2>
                </div>
                <img src="images/barber.jpg" id="barberImg" alt="barber">
            </div>`;
        });
    }

    function styleList(Style) {
        // list of different styles(hair(basic/special) or beard) to show as choosen by user
        var imgIndexList = [], style;
        if (Style == 0)
            style = 'simple';
        if (Style == 1)
            style = 'special';
        if (Style == 2)
            style = 'beard';
        // count styles
        let count = 0;
        for (let i = 1; i < 10; i++) {
            const newImgToCheck = new Image();
            newImgToCheck.src = `images/${style}${i}.jpg`;
            newImgToCheck.onload = function () {
                count += 1;
            }
            newImgToCheck.onerror = function (e) {
                e.preventDefault();
                console.error("No such image.");
            }
        }
        setTimeout(function () {
            console.log(`There are ${count} ${style} styles.`);
            var imgIndex = Math.floor(Math.random() * count) + 1;
            document.getElementById('demos').innerHTML = " ";
            for (let i = 0; i < count; i++) {
                document.getElementById('demos').innerHTML += `<div class="thumbnail">
                <div class="thumbnail-image">
                    <img src="images/${style}${i + 1}.jpg" alt="">
                </div>
                <div class="thumbnail-content">
                    <h3>${style.toUpperCase()} Hair Style${i + 1}</h3>
                    <button class="applyBtn">Select This</button>
                </div>
                </div>`;
            }

            // Select Buttion Click Handler
            for (let i = 0; i < count; i++) {
                document.querySelectorAll('.applyBtn')[i].addEventListener('click', function () {
                    registration(style, i);
                });
            }
        }, 200);
    }

    function registration(style, index) {
        console.log(style + " " + index);
        main.innerHTML = `<form>
            <label for="name">Name: </label>
            <input type="text" id="name">
            <label for="email">Enter email or phone number: </label>
            <input type="text" id = "email">
            <button type="submit" id="submitForToken" >Apply for Token</button>
        </form>`;
    }

    function fetchData() {
        // fetch("./data.json")
        //     .then(response => response.json())
        //     .then(data => function () {
        //         console.log("Code Working" + data.name + data.cut);
        //     })
        //     .catch(error => console.error("Error fetching JSON:", error));
        console.log("Fetch Data Function within login function")
    }
})();