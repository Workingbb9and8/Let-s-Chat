const firebaseConfig = {
  apiKey: "AIzaSyDx0nvejS9ntuF8WXBQdbCD_O-BwElD0qk",
  authDomain: "kwitter-2-4601f.firebaseapp.com",
  databaseURL: "https://kwitter-2-4601f-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-4601f",
  storageBucket: "kwitter-2-4601f.appspot.com",
  messagingSenderId: "710332999099",
  appId: "1:710332999099:web:15f27ebb3152f57d26109e"
};

firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        
//End code
      } });  }); }
getData();

