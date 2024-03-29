$(document).ready(function() {

    // //Initialize Firebase
    const config = {
        apiKey: "AIzaSyBS66-QMQGLVFvfAwvVatjNI-VAxCFiE90",
        authDomain: "rps-multi-666.firebaseapp.com",
        databaseURL: "https://rps-multi-666.firebaseio.com",
        projectId: "rps-multi-666",
        storageBucket: "rps-multi-666.appspot.com",
        messagingSenderId: "572748028631",
        appId: "1:572748028631:web:15661e47d231384c"
    };

    firebase.initializeApp(config);
    var dataRef = firebase.database();

    //game stats
    var wins = 0;
    var losses = 0;
    var ties = 0;

    //gameplay
    document.onkeyup = function(event) {

        //gameplay variables
        // var playerName = $("#localPlayerNameInput").val().trim();

        //localplayer
        var userGuess = event.key;

        dataRef.ref().update({
            userGuess: userGuess,
        });

        //local player push to firebase variables here

        //remote player
        //computer variables for testing of gameplay
        var computerChoices = ["r", "p", "s"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //firebase remote player variables input here

        //local player image population variables
        var rockImg = "assets/images/rock.jpg";
        var paperImg = "assets/images/paper.jpg";
        var scissorsImg = "assets/images/scissors.jpg";

        var rock = $("<img>");
        rock.attr('src', rockImg);
        rock.attr("alt", "rock.jpg");

        var paper = $("<img>");
        paper.attr('src', paperImg);
        paper.attr("alt", "paper.jpg");

        var scissors = $("<img>");
        scissors.attr('src', scissorsImg);
        scissors.attr("alt", "scissors.jpg");

        //remote player image population variables
        var rockImg1 = "assets/images/rock1.jpg";
        var paperImg1 = "assets/images/paper1.jpg";
        var scissorsImg1 = "assets/images/scissors1.jpg";

        var rock1 = $("<img>");
        rock1.attr('src', rockImg1);
        rock1.attr("alt", "rock.jpg");

        var paper1 = $("<img>");
        paper1.attr('src', paperImg1);
        paper1.attr("alt", "paper.jpg");

        var scissors1 = $("<img>");
        scissors1.attr('src', scissorsImg1);
        scissors1.attr("alt", "scissors.jpg");

        //debugging
        // console.log("Letter picked: " + userGuess);
        // console.log("Computer picked: " + computerGuess);

        // local image population
        if (userGuess === "r") {
            $("#player_img").empty();
            $("#player_img").append(rock);
        }
        if (userGuess === "p") {
            $("#player_img").empty();
            $("#player_img").append(paper);
        }
        if (userGuess === "s") {
            $("#player_img").empty();
            $("#player_img").append(scissors);
        }

        //remote image population
        if (computerGuess === "r") {
            $("#remote_img").empty();
            $("#remote_img").append(rock1);
        }
        if (computerGuess === "p") {
            $("#remote_img").empty();
            $("#remote_img").append(paper1);
        }
        if (computerGuess === "s") {
            $("#remote_img").empty();
            $("#remote_img").append(scissors1);
        }

        // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

            if ((userGuess === "r" && computerGuess === "s") ||
                (userGuess === "s" && computerGuess === "p") ||
                (userGuess === "p" && computerGuess === "r")) {
                winnerPop(userGuess);
                // $("#winner_img").empty();
                // $("#winner_img").append(rock)
                wins++;
            } else if (userGuess === computerGuess) {
                ties++;
            } else {
                losses++;
            }

            //debug game stats
            // console.log("Wins: " + wins);
            // console.log("Losses: " + losses);
            // console.log("ties: " + ties);

            //game stats post
            $(".win").text(wins);
            $(".loss").text(losses);
            $(".tie").text(ties);
        }

        dataRef.ref().on("child_added", function(snapshot) {

            //debugging
            console.log(snapshot.val());
            console.log(snapshot.val().userGuess);

            // Handle the errors
        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
        });

    };



    //debugging
    // console.log("Guess Outside Function: " + userGuess);

    function winnerPop(userGuess) {

        //debugging
        // console.log("Guess Inside Function: " + userGuess);

        //winner image plot clear
        $("#winner_img").empty();
        $("#winner_img").fadeTo(300, 1);

        //winner image variables
        var rockImgWin = "assets/images/rock_win.jpg";
        var paperImgWin = "assets/images/paper_win.jpg";
        var scissorsImgWin = "assets/images/scissors_win.jpg";

        var rockWin = $("<img>");
        rockWin.attr('src', rockImgWin);
        rockWin.attr("alt", "rock.jpg");

        var paperWin = $("<img>");
        paperWin.attr('src', paperImgWin);
        paperWin.attr("alt", "paper.jpg");

        var scissorsWin = $("<img>");
        scissorsWin.attr('src', scissorsImgWin);
        scissorsWin.attr("alt", "scissors.jpg");

        //winner image popultation
        if (userGuess === "r") {
            $("#winner_img").empty();
            $("#winner_img").append(rockWin);
            $("#winner_img").delay(1200).fadeTo(300, 0);
        } else if (userGuess === "p") {
            $("#winner_img").empty();
            $("#winner_img").append(paperWin);
            $("#winner_img").delay(1200).fadeTo(300, 0);
        } else if (userGuess === "s") {
            $("#winner_img").empty();
            $("#winner_img").append(scissorsWin);
            $("#winner_img").delay(1200).fadeTo(300, 0);
        }
    }
});