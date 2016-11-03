var cards = [];
cards[0] = "image1.gif";
cards[1] = "image2.gif";
cards[2] = "image3.gif";
cards[3] = "image4.gif";
cards[4] = "image5.gif";
cards[5] = "image6.gif";
cards[6] = "image7.gif";
cards[7] = "image8.gif";

var guess1, guess2;
var matches;

var outputTable = "<table>";

function printTable() {
    shuffleArray();
    var num = 0;
    
    for (var i = 0; i < 4; i++) {
        outputTable += "<tr>";
        for (var j = 0; j < 4; j++) {
            outputTable += "<td><img src = '" + cards[num++] + "'/></td>;
        }
        outputTable += "</tr>";
    }
    document.getElementById("easy").innerHTML = outputTable;
}



function shuffleArray() {
    cards.sort(function(a, b) {return 0.5 - Math.random()});
}

