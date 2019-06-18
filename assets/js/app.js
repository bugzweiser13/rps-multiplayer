$(document).ready(function() {

    // //Initialize Firebase
    const config = {
        apiKey: "AIzaSyBS66-QMQGLVFvfAwvVatjNI-VAxCFiE90",
        authDomain: "rps-multi-666.firebaseapp.com",
        databaseURL: "https://rps-multi-666.firebaseio.com",
        projectId: "rps-multi-666",
        storageBucket: "rps-multi-666.appspot.com",
        messagingSenderId: "572748028631",
        appId: "1:572748028631:web:15661e47d231384c"
    };

    firebase.initializeApp(config);
    var dataRef = firebase.database();

});