class Memoria{
    elements= [
        {
            "element":"RedBull",
            "source":"https://upload.wikimedia.org/wikipedia/de/c/c4/Red_Bull_Racing_logo.svg"
        },
        {
            "element":"RedBull",
            "source":"https://upload.wikimedia.org/wikipedia/de/c/c4/Red_Bull_Racing_logo.svg"
        },
        {
            "element":"McLaren",
            "source":"https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg"
        },
        {
            "element":"McLaren",
            "source":"https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg"
        },
        {
            "element":"Alpine",
            "source":"https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg"
        },
        {
            "element":"Alpine",
            "source":"https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg"
        },
        {
            "element":"AstonMartin",
            "source":"https://upload.wikimedia.org/wikipedia/fr/7/72/Aston_Martin_Aramco_Cognizant_F1.svg"
        },
        {
            "element":"AstonMartin",
            "source":"https://upload.wikimedia.org/wikipedia/fr/7/72/Aston_Martin_Aramco_Cognizant_F1.svg"
        },
        {
            "element":"Ferrari",
            "source":"https://upload.wikimedia.org/wikipedia/de/c/c0/Scuderia_Ferrari_Logo.svg"
        },
        {
            "element":"Ferrari",
            "source":"https://upload.wikimedia.org/wikipedia/de/c/c0/Scuderia_Ferrari_Logo.svg"
        },
        {
            "element":"Mercedes",
            "source":"https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg"
        },
        {
            "element":"Mercedes",
            "source":"https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg"
        }
    ]

    constructor(){
        this.hasFlippedCard=false;
        this.lockBoard=false;
        this.fistCard=null;
        this.secondCard=null;
    }

    shuffleElements(){
        for (var i = elements.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
    }
    unflipCards(){
        this.lockBoard=true;
        //TODO volteo tarjetas 
        this.resetBoard();
    }
    resetBoard(){
        this.fistCard=null;
        this.secondCard=null;
        this.hasFlippedCard=false;
        this.lockBoard=false;
    }
    checkForMatch(){
        JSON.stringify(this.firstCard)===JSON.stringify(this.secondCard)?disableCards():this.unflipCards();
    }
    disableCards(){

        this.resetBoard();
    }
}