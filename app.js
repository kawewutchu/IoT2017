(function() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAwSeCQL1IOPL-4k85q2NH4PzmBja1gSE8",
            authDomain: "iot2017-d5b6f.firebaseapp.com",
            databaseURL: "https://iot2017-d5b6f.firebaseio.com",
            projectId: "iot2017-d5b6f",
            storageBucket: "",
            messagingSenderId: "399751209911"
        };
        firebase.initializeApp(config);

        var preObject = document.getElementById('paths');
        var dbRef = firebase.database().ref().child('paths');
        
         dbRef.on('value', snap => {
            preObject.innerText = JSON.stringify(snap.val(), null, 3);
        });
}());