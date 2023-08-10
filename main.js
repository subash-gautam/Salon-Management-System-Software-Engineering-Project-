/** @format */
(function () {
	"use strict";
	// variable declaration
	const demos = document.getElementById("demos");
	const logInPannel = document.getElementById("logInPannel");
	var main = document.getElementsByTagName("main")[0];
	const admin = "barber",
		passkey = "password",
		period = 30; //average time for a haircut.
	var username,
		password,
		phone,
		detail = {};

	insideMain();
	homePageClickHandler();

	document.getElementById("homeIcon").addEventListener("click", function () {
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

		document.getElementById("submit").addEventListener("click", function (evt) {
			evt.preventDefault();
			username = document.querySelector("#id").value;
			password = document.querySelector("#password").value;
			adminLoginConformation();
		});
	}

	function booking() {
		main.innerHTML = `<h1>Select A Style</h1>`;
		main.innerHTML += `<h2>Simple Styles</h2>`;
		for (let i = 0; i < 2; i++) {
			main.innerHTML += `<div class="thumbnail simpleDisplay">
                <div class="thumbnail-image">
                    <img src="images/simple${i + 1}.jpg" class="imgData" data-style="simple" data-index="${i + 1}">
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
                    <img src="images/special${i + 1}.jpg" class="imgData" data-style="special" data-index="${i + 1}">
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
                    <img src="images/beard${i + 1}.jpg"> class="imgData" data-style="beard" data-index="${i + 1}"
                </div>
                <div class="thumbnail-content">
                    <h3>Beard Style${i + 1}</h3>
                    <button class="applyBtn">Select This</button>
                </div>
            </div>`;
		}
		for (let i = 0; i < 20; i++) {
			document.querySelectorAll(".applyBtn")[i].addEventListener("click", function () {
				let style = document.querySelectorAll(".imgData")[i].getAttribute("data-style");
				let index = document.querySelectorAll(".imgData")[i].getAttribute("data-index");
				registration(style, index);
			});
		}
	}

	function adminLoginConformation() {
		// console.log("User name : " + username + "\nPassword: " + password);
		if (1 || admin == username) {
			if (1 || passkey == password) {
				document.getElementsByTagName("form")[0].style.display = "none";
				adminPannel();
			} else {
				incorrect.innerHTML = "Incorrect password entered !!";
				document.getElementById("submit").innerHTML = "Retry";
			}
		} else {
			incorrect.innerHTML = "username or password is not correct!!";
			document.getElementById("submit").innerHTML = "Retry";
		}
	}

	function adminPannel() {
		var pannel = document.getElementById("adminPannel");
		pannel.innerHTML = `<table>
            <tr>
				<td id = "phoneOnList" >Phone Number</td>
				<td id = "nameOnList" >Name</td>
                <td id = "hairStyleOnList" >Hair Style</td>
                <td id = "timeChoosen" >Time</td>
                <td id = "payStatus" >Payment Status</td>
                <td id = "queueStatus" >Status</td>
                <td id = "queueAction"><button id="refresh">&#10227;</button></td>
            </tr>
			</table>`;
		for (let i = 0; i < localStorage.length; i++) {
			let pn = localStorage.key(i);
			let dtl = JSON.parse(localStorage.getItem(localStorage.key(i)));
			console.log(`${pn}` + dtl);
			if (!dtl.pstat) dtl.pstat = `Not paid`;
			if (!dtl.status) dtl.status = `Waiting`;
			pannel.innerHTML += `<table><tr>
			<td class = "phoneOnList" >${pn}</td>
			<td class = "nameOnList" >${dtl.name}</td>
			<td class = "hairStyleOnList" >		<img src=images/${dtl.style}.jpg alt="Fail to load">	</td>
			<td class = "timeChoosen" >${dtl.time}</td>
			<td class = "payStatus" >${dtl.pstat}</td>
			<td class = "queueStatus" >${dtl.status}</td>
			<td class = "queueAction" > <button class="action"> Action </button> </td>
			</tr></table>`;
		}
		setInterval(function () {
			adminPannel();
		}, 30000);  // Admin pannel 30/30 seconds maa refresh garne...
		document.getElementById("refresh").addEventListener("click", function () {
			adminPannel();
		});
		for (let i = 0; i < localStorage.length; i++) {
			document.querySelectorAll(".queueAction")[i].addEventListener("click", function () {
				let actionPhone = localStorage.key(i);
				console.log(actionPhone);
			});
		}
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

		document.getElementById("logInPannel").innerHTML = `<div id="logInDiv"><button id="booking">Book Now</button>
        <button id="userLogin">Log In</button>
        <button id="barberInfo">About Barber</button>
        <button id="barberLogin">Barber Login</button></div>`;
	}

	function homePageClickHandler() {
		document.querySelectorAll(".thumbnail-image")[0].addEventListener("click", function () {
			styleList(0);
		});

		document.querySelectorAll(".thumbnail-image")[1].addEventListener("click", function () {
			styleList(1);
		});

		document.querySelectorAll(".thumbnail-image")[2].addEventListener("click", function () {
			styleList(2);
		});

		document.getElementById("barberLogin").addEventListener("click", function () {
			barberLogin();
		});

		document.getElementById("userLogin").addEventListener("click", function () {
			login();
		});

		document.getElementById("booking").addEventListener("click", function () {
			booking();
		});

		document.getElementById("barberInfo").addEventListener("click", function () {
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
		var imgIndexList = [],
			style;
		if (Style == 0) style = "simple";
		if (Style == 1) style = "special";
		if (Style == 2) style = "beard";
		// count styles
		let count = 0;
		for (let i = 1; i < 10; i++) {
			const newImgToCheck = new Image();
			newImgToCheck.src = `images/${style}${i}.jpg`;
			newImgToCheck.onload = function () {
				count += 1;
			};
			newImgToCheck.onerror = function (e) {
				e.preventDefault();
				// break;
			};
		}
		setTimeout(function () {
			console.log(`There are ${count} ${style} styles.`);
			var imgIndex = Math.floor(Math.random() * count) + 1;
			document.getElementById("demos").innerHTML = " ";
			for (let i = 0; i < count; i++) {
				document.getElementById("demos").innerHTML += `<div class="thumbnail">
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
				document.querySelectorAll(".applyBtn")[i].addEventListener("click", function () {
					registration(style, i + 1);
				});
			}
		}, 500);
	}

	function registration(style, index) {
		console.log(style + " " + index);
		if (!(detail.name || phone))
			(detail.name = ""), (phone = ""), (detail.time = `${new Date().getHours()}:${new Date().getMinutes()}`); //to avoid undefined in inputs fields
		main.innerHTML = `<form>
            <label for="name">Name: </label>
            <input type="text" id="name" value = "${detail.name}">
            <label for="phone">Enter phone number: </label>
            <input type="text" id = "phone" value = "${phone}">
            <label>Your selected style is ${style.toUpperCase()} ${index}</label>
            <img src="images/${style}${index}.jpg" id="confirmStyleImg" alt"${style} ${index} ">
            <button id="changeStyle">Change</button>
			<label for"time">Select prefered time: </label>
			<input type="time" id="time" value="${detail.time}" step="${period * 60000}">
            <button type="submit" id="submitForToken" >Apply for Token</button>
        </form>`;
		document.getElementById("submitForToken").addEventListener("click", function (evt) {
			evt.preventDefault();
			detail.name = document.getElementById("name").value;
			phone = document.getElementById("phone").value;
			detail.style = `${style}${index}`;
			detail.time = `${document.getElementById("time").value}`;
			console.log(detail);
			console.log(phone);
			saveData();
		});
		document.getElementById("changeStyle").addEventListener("click", function (evt) {
			evt.preventDefault();
			detail.name = document.getElementById("name").value;
			phone = document.getElementById("phone").value;
			booking();
		});
	}

	function login(justRegistered = 0) {
		if (!justRegistered) {
			main.innerHTML = `<form>
            <label for="phone">Enter phone number: </label>
            <input type="text" id = "phone" placeholder = "Registered during registration"></input>
			<button for="checkPhone" id='checkPhone'>Next</buttion>
			</form>`;
			document.getElementById("checkPhone").addEventListener("click", function () {
				let enteredPhone = document.getElementById("phone").value;
				detail = JSON.parse(localStorage.getItem(enteredPhone));
				if (detail) {
					phone = enteredPhone;
					main.innerHTML = `<form>
					<label for="phone">Enter phone number: </label>
					<input type="text" id = "phone" placeholder = "Registered during registration"></input>
					<button for="checkPhone" id='checkPhone'>Next</buttion>
					</form>`;
					display();
				} else {
					alert("Phone Number not registered.");
					login(0);
				}
			});
			function display() {
				if (!detail.pstat) detail.pstat = `Not paid yet. <button id = "makePayment">Pay Now</button>`;
				if (!detail.status) detail.status = `Waiting`;
				main.innerHTML = `<h2>Name: ${detail.name}</h2>
				<h2>Phone: ${phone}</h2>
				<h2>Style: </h2>
				<img src="images/${detail.style}.jpg" alt="Image Processing Error" style="max-width: 100px;">
				<h2>Time: ${detail.time}</h2>
				<h2>Payment Status: ${detail.pstat}</h2>
				<h2>Status : ${detail.status}</h2>
				<button id = "logOut">Log Out</button>`;
				if (!(detail.pstat == "paid")) detail.pstat = false;
				document.getElementById("makePayment").addEventListener("click", function () {
					payment();
				});
				document.getElementById("logOut").addEventListener("click", function () {
					(phone = ""), (detail = {});
					insideMain();
					homePageClickHandler();
				});
			}
		}
	}

	function saveData() {
		if (phone && detail.name && detail.style && detail.time) {
			localStorage.setItem(phone, JSON.stringify(detail));
			(detail = {}), (phone = "");
			console.log("Data Saved");
			let justRegistered = 1;
			login(justRegistered);
		} else {
			console.log("Some of the data is missing, please complete the form.");
		}
	}

	function payment() {
		//payment function goes here....
	}
})();
