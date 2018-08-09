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
  const lookEmail = document.getElementById('lookEmail');
  const btnForgot = document.getElementById('btnForgot');

  const displayMessage = document.getElementById('message');

   btnForgot.addEventListener('click', (e) => {
    // Get the Email
    const email = lookEmail.value;

    const auth = firebase.auth();
    const actionCodeSettings = null;
  auth.sendPasswordResetEmail(
    'email', actionCodeSettings)
    .then(function() {
      // Password reset email sent.
    })
    .catch(function(error) {
    });

   const newPassword = "";
   auth.confirmPasswordReset(email, newPassword)
    .then(function() {
      // Success
    })
    .catch(function(error) {
      // Invalid code
    })

  });
})();
