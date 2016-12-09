
"use strict";

class BasicFlashCard {
    constructor(front, back) {
        this.front = front;
        this.back = back;
    }

     save() {      
        var fs = require("fs");        
        fs.appendFile("data.txt", "Basic Flashcard : \t Front : " + this.front + ", \t Back" + " : " + this.back + "\n");
    }
}

class ClozeFlashCard{
    constructor(text, cloze) {
        this.text = text;
        this.cloze = cloze;
    }

     save() {      
        var fs = require("fs");
        fs.appendFile("data.txt", "Cloze Flashcard : \t Front : " + this.text + ", \t Back" + " : " + this.cloze + "\n");
    }
}

var cardType = process.argv[2];
var arg1 = process.argv[3];
var arg2 = process.argv[4];

if (cardType == "basic") {
    var basicCard = new BasicFlashCard(arg1, arg2);
    basicCard.save();
} else if (cardType == "cloze") {
    var clozeCard = new ClozeFlashCard(arg1, arg2);
    clozeCard.save();
} else {
    console.log("ERROR : Your input is not correct!!!");
}