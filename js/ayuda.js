class Ayuda{
    constructor(){
        let footer = document.querySelector("footer");
        let button = document.createElement("button");
        button.textContent="Ayuda";
        button.onclick=function(){
            let dialogButton=document.createElement("button").setAttribute("autofocus"," ");
            dialogButton.textContent="Close";
            let dialog=document.createElement("dialog").appendChild(dialogButton);
            let help = document.createElement("p");
            help.append("");
            dialog.appendChild(help);
            footer.appendChild("<dialog><button autofocus>Close</button><p>Invalid file. Default text will be used</p></dialog>");
            document.querySelector("dialog button").on("click",() => {document.querySelector("dialog").close();});
            dialog.showModal();
        };
        footer.prepend(button);
    }
}