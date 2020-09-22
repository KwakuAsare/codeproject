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

//generates a fact about the user's birthday in History.

$("#bdaySubmit").click(function birthdayFact(){
    $(document).ready(function(){
        userBirthDay = $("#userBirthday").val();
        var birthdayURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + userBirthDay +"/date";
        $.ajax({
            url: birthdayURL,
            method: "GET"
        }).then(function(response){
            $("#birthday-response").text(response);
        })
    })
});

//generates a fact about the year the user graduated.

$("#gradSubmit").click(function graduationFact(){
    $(document).ready(function(){
        graduationDate = $("#userGradYear").val();
        var graduationURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + graduationDate + "/year";
        $.ajax({
            url: graduationURL,
            method: "GET"
        }).then(function(response){
            $("#graduation-response").text(response);
        })
    })
});

//generates a fact about the user's birthday.

$("#favSubmit").click(function favoriteNumberFact(){
    $(document).ready(function(){
        favoriteNumber = $("#userFavNum").val();
        var favNumberURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + favoriteNumber + "/trivia";
        $.ajax({
            url: favNumberURL,
            method: "GET"
        }).then(function(response){
            $("#Fav-Num-response").text(response);
        })
    })
});

//generates a fact about the user's house number (so a fact about 1600 from 1600 Pennsylvania ave).

$("#houseSubmit").click(function houseNumberFact(){
    $(document).ready(function(){
        houseNumber = $("#userHouseNum").val();
        var houseNumberURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + houseNumber + "/trivia";
        $.ajax({
            url: houseNumberURL,
            method: "GET"
        }).then(function(response){
            $("#house-response").text(response);
        })
    })
});

//generates a fact about the user's area code number.

$("#areaSubmit").click(function areaCodeFact(){
    $(document).ready(function(){
        areaCode = $("#userAreaCode").val();
        var areaCodeURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + areaCode + "/trivia";
        $.ajax({
            url: areaCodeURL,
            method: "GET"
        }).then(function(response){
            $("#area-code-response").text(response);
        })
    })
});

//generates a fact about the user's shoe size.

$("#shoeSubmit").click(function shoeSizeFact(){
    $(document).ready(function(){
        shoeSize = $("#userSize").val();
        var shoeSizeURL = "https://cors-anywhere.herokuapp.com/http://numbersapi.com/" + shoeSize + "/trivia";
        $.ajax({
            url: shoeSizeURL,
            method: "GET"
        }).then(function(response){
            $("#shoe-size-response").text(response);
        })
    })
});


//call number generator functions.

generateFactOfTheDay();


