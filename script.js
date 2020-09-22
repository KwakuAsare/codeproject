//setup variables that will be populated by user inputs and then used to create the URL's for the API calls

var userBirthDay = "";
var graduationDate = "";
var favoriteNumber = "";
var houseNumber = "";
var areaCode = "";
var shoeSize = "";

//variables to get the current day and month to generate a URL for the Fact of the Day
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var todayURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + month + "/" + day +"/date"

//function to generate and display a Fact of the Day for the current day.

function generateFactOfTheDay(){
    $(document).ready(function(){
        $.ajax({
            url: todayURL,
            method: "GET"
        }).then(function(response){
            $(".full-width-testimonial-text").text(response);
        })
    })
}

//JS for a button to generate a fun activity if the user is bored.

$("#activity-button").click(function generateActivity(e){
    e.preventDefault();
        var boredURL = "https://cors-anywhere.herokuapp.com/http://www.boredapi.com/api/activity/";
    $.ajax({
        url: boredURL,
        method: "GET"
    }).then(function(response){
        $("#activity-text").text(response.activity);
        console.log(response.activity);
    })

});

//function to generate the facts relevant to the date, number or year the user inputs into the text boxes - needs to be made DRY, working on a way to generate using a FOR loop or similar method (perhaps data attributes for the date, year, etc for the URL generation).

$(".button").click(function generateFacts(e){
    e.preventDefault();
    $(".Numbers").hide();

//generates a fact about the user's birthday in History.

function birthdayFact(){
    $(document).ready(function(){
        userBirthDay = $("#userBirthday").val();
        var birthdayURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + userBirthDay +"/date";
        $.ajax({
            url: birthdayURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something that happened on your birthday in history:</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};

//generates a fact about the year the user graduated.

function graduationFact(){
    $(document).ready(function(){
        graduationDate = $("#userGradYear").val();
        var graduationURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + graduationDate + "/year";
        $.ajax({
            url: graduationURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something that happened the year you graduated!</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};

//generates a fact about the user's birthday.

function favoriteNumberFact(){
    $(document).ready(function(){
        favoriteNumber = $("#userFavNum").val();
        var favNumberURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + favoriteNumber + "/trivia";
        $.ajax({
            url: favNumberURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something about your favorite number!</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};

//generates a fact about the user's house number (so a fact about 1600 from 1600 Pennsylvania ave).

function houseNumberFact(){
    $(document).ready(function(){
        houseNumber = $("#userHouseNum").val();
        var houseNumberURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + houseNumber + "/trivia";
        $.ajax({
            url: houseNumberURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something about the number of your address!</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};

//generates a fact about the user's area code number.

function areaCodeFact(){
    $(document).ready(function(){
        areaCode = $("#userAreaCode").val();
        var areaCodeURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + areaCode + "/trivia";
        $.ajax({
            url: areaCodeURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something about the number of your area code!</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};

//generates a fact about the user's shoe size.

function shoeSizeFact(){
    $(document).ready(function(){
        shoeSize = $("#userSize").val();
        var shoeSizeURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + shoeSize + "/trivia";
        $.ajax({
            url: shoeSizeURL,
            method: "GET"
        }).then(function(response){
            var bHTMLHead = "<h4>Here's something that about the number of your shoe size!</h4>";
            var data = response;
            $(document.body).append(bHTMLHead,data);
        })
    })
};


//call number generator functions.

birthdayFact();
graduationFact();
favoriteNumberFact();
houseNumberFact();
areaCodeFact();
shoeSizeFact();

});

generateFactOfTheDay();
