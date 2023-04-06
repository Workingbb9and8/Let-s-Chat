const firebaseConfig = {
  apiKey: "AIzaSyDx0nvejS9ntuF8WXBQdbCD_O-BwElD0qk",
  authDomain: "kwitter-2-4601f.firebaseapp.com",
  databaseURL: "https://kwitter-2-4601f-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-4601f",
  storageBucket: "kwitter-2-4601f.appspot.com",
  messagingSenderId: "710332999099",
  appId: "1:710332999099:web:15f27ebb3152f57d26109e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML = row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
