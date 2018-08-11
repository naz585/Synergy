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

  const displayMessage = document.getElementById('message');
   firebase.auth().onAuthStateChanged((firebaseUser) => {
                                    if(firebaseUser) {
                                      console.log(firebaseUser);
                                      document.getElementById('message').innerText = 'You are logged in';
                                      document.getElementById('login').hidden= true;
                                      document.getElementById('logout').hidden= false;
                                    }else{
                                      document.getElementById('message').innerText = 'You should make an account :D';
                                      document.getElementById('login').hidden= false;
                                      document.getElementById('logout').hidden= true;
                                    }
                                  });

})();
