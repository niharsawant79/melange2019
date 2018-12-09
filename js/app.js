//Melange firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAxOXVfetY1ZG-YPzKpL9jQrUqYXmxFLY4",
    authDomain: "melange-5b115.firebaseapp.com",
    databaseURL: "https://melange-5b115.firebaseio.com",
    projectId: "melange-5b115",
    storageBucket: "melange-5b115.appspot.com",
    messagingSenderId: "740671338640"
  };
  firebase.initializeApp(config);
  
  //create refences
const dbRefObject = firebase.database().ref().child('events');
//for melange events list
const divCard =  document.getElementById('hotelid');
dbRefObject.on('child_added',snap=>{
  var eventName = snap.child("EventName").val();
  var eventcomm = snap.child("MangingCommittee").val();
  var eventTiming = snap.child("EventTiming").val();
      divCard.innerHTML += ' <div class="col-lg-3 col-md-6"><div  class="hotel">'+
              '<div class="hotel-img">'+
                '<img src="img/hotels/1.jpg" alt="Hotel 1" class="img-fluid">'+
              '</div>'+
              '<h3><a href="#">'+eventName+'</a></h3>'+
              
              '<div class="stars">'+
              
                 '<i class="fa fa-clock"></i>  '+ eventTiming+
              //   <i class="fa fa-star"></i>
              //   <i class="fa fa-star"></i>
              //   <i class="fa fa-star"></i>
              //   <i class="fa fa-star"></i>
              '</div>'+
              '<p>'+eventcomm+'</p>'+
            '</div></div>'
})

       
      
    

    
  
  
