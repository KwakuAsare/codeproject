var userBirthDay = "";
var graduationDate = "";
var favoriteNumber = "";
var houseNumber = "";
var areaCode = "";
var shoeSize = "";



$(".button").click(function generateFacts(e){
    e.preventDefault();
    $(".Numbers").hide();

function birthdayFact(){
    $(document).ready(function(){
        userBirthDay = $("#userBirthday").val();
        var birthdayURL = "http://numbersapi.com/" + userBirthDay +"/date";
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

function graduationFact(){
    $(document).ready(function(){
        graduationDate = $("#userGradYear").val();
        var graduationURL = "http://numbersapi.com/" + graduationDate + "/year";
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

function favoriteNumberFact(){
    $(document).ready(function(){
        favoriteNumber = $("#userFavNum").val();
        var favNumberURL = "http://numbersapi.com/" + favoriteNumber + "/trivia";
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

function houseNumberFact(){
    $(document).ready(function(){
        houseNumber = $("#userHouseNum").val();
        var houseNumberURL = "http://numbersapi.com/" + houseNumber + "/trivia";
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

function areaCodeFact(){
    $(document).ready(function(){
        areaCode = $("#userAreaCode").val();
        var areaCodeURL = "http://numbersapi.com/" + areaCode + "/trivia";
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

function shoeSizeFact(){
    $(document).ready(function(){
        shoeSize = $("#userSize").val();
        var shoeSizeURL = "http://numbersapi.com/" + shoeSize + "/trivia";
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




birthdayFact();
graduationFact();
favoriteNumberFact();
houseNumberFact();
areaCodeFact();
shoeSizeFact();

});


