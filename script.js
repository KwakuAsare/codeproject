var factOfTheDay = "09/14";
var userBirthDay = "11/15";
var graduationDate = "01/25";
var favoriteNumber = "37";
var houseNumber = "183";
var randomFact = "5555";
var randomDate = "11/16";

var factOfTheDayURL = "http://numbersapi.com/" + factOfTheDay +"/date";
var birthdayURL = "http://numbersapi.com/" + userBirthDay +"/date";
var graduationURL = "http://numbersapi.com/" + graduationDate + "/date";
var favNumberURL = "http://numbersapi.com/" + favoriteNumber + "/trivia";
var houseNumberURL = "http://numbersapi.com/" + houseNumber + "/trivia";
var randomFactURL = "http://numbersapi.com/" + randomFact + "/trivia";
var randomDateURL = "http://numbersapi.com/" + randomDate + "/date";
var movieURL = "http://www.omdbapi.com/?y=1996&apikey=812d8551";

$.ajax({
    url: factOfTheDay,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: birthdayURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: graduationURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: favNumberURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: houseNumberURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: randomFactURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: randomDateURL,
    method: "GET"
}).then(function(response){
    // add functions for numbers!!
    console.log(response);
})

$.ajax({
    url: movieURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    // add functions for movies!!
})