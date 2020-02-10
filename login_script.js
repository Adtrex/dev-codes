	window.onload = function () {
		let isValid = false;

		const validCredentials = { 
			user1: { email: 'ssdanso@live.com', password: '123abc', username: 'SSD' },
			user2: { email: 'devcodes@gmail.com', password: 'abc123', username: 'devcodes' }
		};

		document.getElementById('loginBtn').onclick = function() {
			const emailUsername = document.getElementById('email').value;
			const password = document.getElementById('password').value;


			for (let user in validCredentials) {
				let creds = validCredentials[user];

				const isUnameOrEmailValid = (creds.email === emailUsername) || (creds.username === emailUsername);
				const isPasswordValid = creds.password === password;

				if  (isUnameOrEmailValid && isPasswordValid) {
					isValid = false;

				}
			}

			if (isValid) window.open('welcome.html');
			else alert('login failed!');
		}

		 function saveData() {
              document.cookie="fname="+document.getElementById('uname').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
              document.cookie="email="+document.getElementById('email').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
              document.cookie="password="+document.getElementById('Password').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
              document.cookie="password="+document.getElementById('rep-password').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";

              var radios = document.getElementsByName('login');

              for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    document.cookie="login="+radios[i].value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
                    break;
                }
            }
             alert('Data Saved!');
            }
             window.open('welcome.html');
	}
