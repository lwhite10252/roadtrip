//

var app = {

	initialize: function() {
		this.bindEvents(); 
	}, 
	bindEvents: function (){
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

//the device is ready, LET'S DO A MAP!!!
onDeviceReady: function(){

//activate geolocation - GO!
navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
}, 

//Geo located you! Good Job! 
onSuccess: function(position) {
	var longitude = position.coords.longitude; 
	var latitude = position.coords.latitude; 
	var latLong = new google.maps.LatLng(latitude, longitude); 

//some map options. Crucial unit. 
	var mapOptions = {
		center:latLong, 
		zoom:16, 
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

//let's make a map object.  We'll put it in the roadMap Div and define it with 
// our Crucial Units from above. 
	var map=new google.maps.Map(document.getElementById("roadMap"), mapOptions); 
},

//Geo did not locate you. Game over. You're out of quarters. Man.  
onError: function(error) {
	alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
},

};