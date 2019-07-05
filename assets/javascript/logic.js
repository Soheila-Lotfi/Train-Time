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

// when the user clicks the submit button, 
//grab the user inputs and write it on the firebase database

$("#add-user").click(function(event){

    event.preventDefault();     

// grab the user input
    var trainName=$("#train-name-input").val().trim();
    var destination=$("#destination-input").val().trim();
    var firstTime=$("#time-input").val().trim();
    var tFrequency=$("#frequency-input").val().trim();

//calculate  minutes till next train

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + currentTime.format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
// ---------------------------------------------------------------     
// calculate Next Train Arrival time
    var nextArrival = moment().add(tMinutesTillTrain, "minutes");
    var nextTrainArrival=moment(nextArrival).format("hh:mm");

});