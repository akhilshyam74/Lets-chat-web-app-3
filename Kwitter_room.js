var firebaseConfig = {
    apiKey: "AIzaSyD4z5wOtydzcHXnguact4cfDN2ZSOF5u8w",
    authDomain: "kwitter-homework-68cab.firebaseapp.com",
    projectId: "kwitter-homework-68cab",
    storageBucket: "kwitter-homework-68cab.appspot.com",
    messagingSenderId: "234614542566",
    appId: "1:234614542566:web:66790689bdd1665ab66b27"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name - " + Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>"
       document.getElementById("output").innerHTML +=row;
       //End code
       });});}
 getData();
 
 user_name=localStorage.getItem("user_name");
 console.log(user_name)
       document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
 
 function addRoom () {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
       localStorage.setItem ("room_name",room_name);
       window.location="Kwitter_page.html"
 }
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location = "kwitter_page.html"
 }
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="kwitter.html"
 }