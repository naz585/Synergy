(function () {
  var config = {
    apiKey: "AIzaSyCWmWFqV9cW2W9es-DNlc0lMGxfWCYPv0o",
    authDomain: "auth-19d7f.firebaseapp.com",
    databaseURL: "https://auth-19d7f.firebaseio.com",
    projectId: "auth-19d7f",
    storageBucket: "",
    messagingSenderId: "435909643616"
  };

  firebase.initializeApp(config);
  console.log(firebase);
  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  const displayMessage = document.getElementById('message');

  btnLogin.addEventListener('click', (e) => {
    // Get the Email and Password
    const email = txtEmail.value;
    const pass = txtPassword.value;

    const auth = firebase.auth();
    // Sign In

    auth.signInWithEmailAndPassword(email, pass).catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', (e) => {
    // Get the Email and Password
    const email = txtEmail.value;
    const pass = txtPassword.value;

    const auth = firebase.auth();


    // Sign In
    auth.createUserWithEmailAndPassword(email, pass).catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', (e) => {
    firebase.auth().signOut();
  });

  //Realtime Listener, checks if user is logged in or logged out. and displays so in console.
  firebase.auth().onAuthStateChanged((firebaseUser) => {
                                    if(firebaseUser) {
                                      console.log(firebaseUser);
                                      document.getElementById('message').innerText = 'You are logged in';
                                      document.getElementById('btnLogout').hidden = false;
                                      document.getElementById('btnSignUp').hidden= true;
                                      document.getElementById('btnLogin').hidden= true;
                                    }else{
                                      document.getElementById('message').innerText = 'Create an Account or Login.';
                                      document.getElementById('btnLogout').hidden = true;
                                      document.getElementById('btnSignUp').hidden= false;
                                      document.getElementById('btnLogin').hidden= false;
                                    }
                                  });



})();

