
var firebaseConfig = {
  apiKey: "AIzaSyDhCMCP4XVtyZYNMfs3olzqhrFEVya8vtw",
  authDomain: "project-101-45ad9.firebaseapp.com",
  databaseURL: "https://project-101-45ad9-default-rtdb.firebaseio.com",
  projectId: "project-101-45ad9",
  storageBucket: "project-101-45ad9.appspot.com",
  messagingSenderId: "695772828776",
  appId: "1:695772828776:web:2140a47018d14c947797dd"
};

firebase = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    <button onclick="addcontact();" class="btn btn-success">#Add Contact</button>

    function addRoom()
    {
      room_name = document.getElementById("contact_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding contact name"
      });
      localStorage.setItem("contact_name", room_name);
        
      window.location = "LetsChat_page.html";
  }
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("contact Name - " + contact_names);
   row = "<div class='contact_name' id="+Room_names+" onclick='redirectTocontactName(this.id)' >#"+ contact_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}