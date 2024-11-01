'use strict';
class Memoria{
    elements= [
        {
            element:"RedBull",
            source:"https://upload.wikimedia.org/wikipedia/de/c/c4/Red_Bull_Racing_logo.svg"
        },
        {
            element:"RedBull",
            source:"https://upload.wikimedia.org/wikipedia/de/c/c4/Red_Bull_Racing_logo.svg"
        },
        {
            element:"McLaren",
            source:"https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg"
        },
        {
            element:"McLaren",
            source:"https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg"
        },
        {
            element:"Alpine",
            source:"https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg"
        },
        {
            element:"Alpine",
            source:"https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg"
        },
        {
            element:"AstonMartin",
            source:"https://upload.wikimedia.org/wikipedia/fr/7/72/Aston_Martin_Aramco_Cognizant_F1.svg"
        },
        {
            element:"AstonMartin",
            source:"https://upload.wikimedia.org/wikipedia/fr/7/72/Aston_Martin_Aramco_Cognizant_F1.svg"
        },
        {
            element:"Ferrari",
            source:"https://upload.wikimedia.org/wikipedia/de/c/c0/Scuderia_Ferrari_Logo.svg"
        },
        {
            element:"Ferrari",
            source:"https://upload.wikimedia.org/wikipedia/de/c/c0/Scuderia_Ferrari_Logo.svg"
        },
        {
            element:"Mercedes",
            source:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg"
        },
        {
            element:"Mercedes",
            source:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg"
        }
    ]

    constructor(){
        this.hasFlippedCard=false;
        this.lockBoard=false;
        this.firstCard=null;
        this.secondCard=null;
        this.shuffleElements();
        this.createElements();
        this.addEventListeners();
    }

    addEventListeners(){
        for (var i = 0; i <this.element.length; i++) {
            this.unflipCard.bind(this.elements[i],this);
        }
    }

    shuffleElements(){
        for (var i = this.elements.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.elements[i];
            this.elements[i] = this.elements[j];
            this.elements[j] = temp;
        }
    }
    unflipCards(){
        this.lockBoard=true;
        //TODO volteo tarjetas 
        this.resetBoard();
    }
    resetBoard(){
        this.firstCard=null;
        this.secondCard=null;
        this.hasFlippedCard=false;
        this.lockBoard=false;
    }
    checkForMatch(){
        this.firstCard===this.secondCard?disableCards():this.unflipCards();
    }
    disableCards(){
        this.firstCard;
        this.resetBoard();
    }
    createElements(){
        let section = document.createElement("section");
        let header = document.createElement("header");
        header.appendChild(document.createTextNode("Juego de Memoria"));
        section.appendChild(header);
        for(var i=0;i<this.elements.length;i++){
            let article= document.createElement("article");
            let heading= document.createElement("h3");
            heading.appendChild(document.createTextNode("Tarjeta de memoria"))
            let image= document.createElement("img");
            image.src=this.elements[i].source;
            image.alt=this.elements[i].element;
            article.appendChild(heading);
            article.appendChild(image);
            section.appendChild(article);
        }
        document.body.appendChild(section);
    }
}