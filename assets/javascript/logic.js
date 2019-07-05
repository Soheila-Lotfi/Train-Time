//connect the app to firebase
var config = {
    apiKey: "AIzaSyABDsPf7aAg7aldCSC9S64jTNPt2SNgiXM",
    authDomain: "uoft-46394.firebaseapp.com",
    databaseURL: "https://uoft-46394.firebaseio.com",
    projectId: "uoft-46394",
    storageBucket: "uoft-46394.appspot.com",
    messagingSenderId: "59547803136",
    appId: "1:59547803136:web:89a23612e065ea87"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// determine the variables
var name = "";
var destination = "";
var startTime= "";
var nextarrival = "";
var frequency=0;
var minutesAway=0;

// when the user clicks the sumit button, 
//grab the user inputs and write it on the firebase database

$("#add-user").click(function(event){

    event.preventDefault();
  
    var trainName=$("#train-name-input").val().trim();
    var destination=$("#destination-input").val().trim();
    var firstTime=$("#time-input").val().trim();
    var tFrequency=$("#frequency-input").val().trim();
  
});