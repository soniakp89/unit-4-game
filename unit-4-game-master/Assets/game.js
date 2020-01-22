//Set Variables and Functions

var targetNumber = Math.floor(Math.random() * 102 + 19);
var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [];
var images = ["Assets/Images/images 1.jpeg", 
              "Assets/Images/images 2.jpeg", 
              "Assets/Images/images 3.jpeg", 
              "Assets/Images/images 4.jpeg"]


$("#guesses").text(targetNumber);
$("#userScore").text(counter);

function SetCrystals() {
for (var i = 0; i < 4; i++) {
    numberOptions[i] = Math.floor(Math.random() * 12) + 1;
    }

    for (var i = 0; i < numberOptions.length; i++) {

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-img");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("crystalpoints", numberOptions[i]);
        $("#gems").append(imageCrystal); 
    }

    $(".crystal-img").on("click", function () {
    var crystalValue = ($(this).attr("crystalpoints"));
        crystalValue = Number(crystalValue);
    
        counter += crystalValue;
    
        if (counter === targetNumber) {
            $("#winOrloss").text("You Win!");
            wins += 1;
            $("#wins").text("Wins: " + wins);
            reset();
        }
        else if (counter >= targetNumber) {
            $("#winOrloss").text("Try Again!!!!")
            losses += 1;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    
        $("#userScore").text(counter);
    
    });
}

//Resetting Value system

SetCrystals();
function reset() {
    targetNumber = Math.floor(Math.random() * 102 + 19);
    counter = 0;
    $("#guesses").text(targetNumber);
    $("#userScore").text(counter);
    $("#gems").empty();
    numberOptions = [];
    SetCrystals();
}
