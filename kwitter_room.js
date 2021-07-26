var firebaseConfig = {
  apiKey: "AIzaSyDQDwUgvZP657XO9PyaTLWKHI18u6XI-Ow",
  authDomain: "school-chat-46996.firebaseapp.com",
  projectId: "school-chat-46996",
  storageBucket: "school-chat-46996.appspot.com",
  messagingSenderId: "490637409644",
  appId: "1:490637409644:web:03a04e1aa389fd7d44c749"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({

          purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
//End code
});});}
getData();