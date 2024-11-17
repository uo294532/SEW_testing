class Semáforo{
    levels=[0.2,0.5,0.8];
    constructor(){
        this.changeDifficulty();
        this.lights=4;
        this.unload_moment=null;
        this.click_moment=null;
        this.createStructure();
    }
    changeDifficulty(){
        this.difficulty= this.levels[Math.floor(Math.random()*3)];
    }
    createStructure(){
        let main = document.querySelector("main");
        let h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode("Juego del semáforo"));
        main.appendChild(h3);
        for(let i=0;i<this.lights;i++){
            let div = document.createElement("div");
            main.appendChild(div);
        }
        let button1 = document.createElement("button");
        button1.setAttribute("type","button");
        button1.onclick=this.initSequence.bind(this);
        button1.appendChild(document.createTextNode("Arranque"));
        let button2 = document.createElement("button");
        button2.setAttribute("type","button");
        button2.appendChild(document.createTextNode("Reacción"));
        button2.setAttribute("disabled","disabled");
        button2.onclick= this.stopReaction.bind(this);
        main.appendChild(button1);
        main.appendChild(button2);
    }
    initSequence(){
        this.changeDifficulty();
        console.log(this.difficulty);
        let main = document.querySelector("main");
        main.classList.add("load");
        let button = document.querySelector("button");
        button.setAttribute("disabled","disabled");
        setTimeout(()=>{
            this.unload_moment=new Date();
            this.endSequence();
        },(this.difficulty*1000)+2000);
    }
    endSequence(){
        let button2 = document.querySelector("button:nth-of-type(2)");
        button2.removeAttribute("disabled");
        let main = document.querySelector("main");
        main.classList.add("unload");
    }
    stopReaction(){
        this.click_moment = new Date();
        let reaction_time = this.click_moment - this.unload_moment;
        let main = document.querySelector("main");
        let paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode("Your reaction time was: "+reaction_time+" ms"));
        main.appendChild(paragraph);
        main.classList.remove("load");
        main.classList.remove("unload");
        let begin = document.querySelector("button");
        let reaction = document.querySelector("button:nth-of-type(2)");
        begin.removeAttribute("disabled");
        reaction.setAttribute("disabled","disabled");
    }
}