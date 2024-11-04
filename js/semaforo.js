class Semáforo{
    levels=[0.2,0.5,0.8];
    constructor(){
        this.difficulty=this.levels[Math.floor(Math.random()*3)];
        this.lights=4;
        this.unload_moment=null;
        this.click_moment=null;
        this.createStructure();
    }
    createStructure(){
        let main = document.querySelector("main");
        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Juego del semáforo"));
        main.appendChild(h2);
        for(let i=0;i<this.lights;i++){
            let div = document.createElement("div");
            main.appendChild(div);
        }
        let button1 = document.createElement("button");
        button1.setAttribute("type","button");
        button1.appendChild(document.createTextNode("Comenzar"));
        let button2 = document.createElement("button");
        button2.setAttribute("type","button");
        button2.appendChild(document.createTextNode("Parar"));
        main.appendChild(button1);
        main.appendChild(button2);
    }
}