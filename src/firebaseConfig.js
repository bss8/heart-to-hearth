document.addEventListener('DOMContentLoaded', function() {
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });

    const firebaseConfig = {
        apiKey: "AIzaSyA_ONpzDxdovkVOuFJ7bqdgXCIZj8PUsfk",
        authDomain: "heart-to-hearth-599eb.firebaseapp.com",
        databaseURL: "https://heart-to-hearth-599eb.firebaseio.com",
        projectId: "heart-to-hearth-599eb",
        storageBucket: "heart-to-hearth-599eb.appspot.com",
        messagingSenderId: "936458935687",
        appId: "1:936458935687:web:900c48853c726f66534722",
        measurementId: "G-ZHL845F4MN"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    let db;

    try {
        let app = firebase.app();
        db = firebase.database();

        firebase.database.enableLogging(function(message) {
            console.log("[FIREBASE-DB]", message);
        });

        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    return true;
                },
                uiShown: function() {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                }
            ]
        };

        ui.start('#firebaseui-auth-container', uiConfig);

        let displayName;
        let email;
        let emailVerified;
        let photoURL;
        let uid;
        let phoneNumber;
        let providerData;

        initApp = function() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    displayName = user.displayName;
                    email = user.email;
                    emailVerified = user.emailVerified;
                    photoURL = user.photoURL;
                    uid = user.uid;
                    phoneNumber = user.phoneNumber;
                    providerData = user.providerData;

                    if(!emailVerified) {
                        user.sendEmailVerification().then(function() {
                            // Email sent.
                          }).catch(function(error) {
                            // An error happened.
                          });
                    }

                    user.getIdToken().then(function(accessToken) {
                    
                    });
                } else {
                    // User is signed out.
                }
            }, function(error) {
                console.log(error);
            });
        };

        window.addEventListener('load', function() {
            initApp();
        });

    } catch (e) {
        // console.error(e);
        // document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }

});