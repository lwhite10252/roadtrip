var longitude;
var latitude;
var pos = {};
var map = {};
//

var app = {

	initialize: function() {
		this.bindEvents(); 
	}, 
	bindEvents: function (){
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

//the device is ready, LET'S DO A MAP!!!
onDeviceReady: 
	navigator.splashscreen.hide() //This will hide the splashscreen so that it doesn't run forever
	function(){

//activate geolocation - GO!
navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
}, 

//Geo located you! Good Job! 
onSuccess: function(position) {
	longitude = position.coords.longitude; 
	latitude = position.coords.latitude; 
	var latLong = new google.maps.LatLng(latitude, longitude); 

//some map options. Crucial unit. 
	var mapOptions = {
		center:latLong, 
		zoom:16, 
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

//let's make a map object.  We'll put it in the roadMap Div and define it with 
// our Crucial Units from above. 
	map=new google.maps.Map(document.getElementById("roadMap"), mapOptions);      
   },

//Geo did not locate you. Game over. You're out of quarters. Man.  
onError: function(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
},

};

function startTrip(){

  

    // Show a custom alertDismissed
    //
        navigator.notification.alert(
            longitude + ' ' + latitude,  // message
            alertDismissed,         // callback
            'Your Position',            // title
            'Done'                  // buttonName
        );
    }

 function alertDismissed() {
            //drop a pin, hopefully
          pos = {lat: latitude, lng:longitude};
            
          var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'You are here'
        });
        }
