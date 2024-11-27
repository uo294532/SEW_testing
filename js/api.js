class TypeRacer{
    constructor(){
        this.textName="default";
        this.toTypeText="Morbi nec ligula ultrices, auctor nibh in, pulvinar est. Integer libero tellus, varius at metus id, interdum faucibus lacus. Nullam rhoncus placerat massa nec rutrum. Morbi tortor metus, malesuada fringilla faucibus ac, accumsan sed est.";
        $("body").append("<button name='begin'>Comenzar</button>");
        $("body").append("<label for='uploadText'>Usar texto:</label><input type='file' id='uploadText' name='uploadText' accept='.txt'/>")
        $("body").append("<main><p>Para completar el juego, escribe todo el texto sin equivocarte para hacer avanzar al fórmula, y que así pase la línea de salida al final de la recta!</p></main>");
        $("input[name='uploadText']").on("change",this.setText.bind(this,$("input[name='uploadText']")));
        $("button[name='begin']").on("click",this.setupGame.bind(this));
    }
    setText(input){
        var file=input.prop("files")[0];
        if(file===undefined)
            return;
        if(file.type.match('text/*')){
            var lector = new FileReader();
            let typeRacer=this;
            this.textName=file.name;
            lector.onload = function (evento) {
                typeRacer.toTypeText=lector.result.replaceAll('\t',"").replaceAll('\n',"");
            }
            lector.readAsText(file);
        }else{
            $("main").append("<dialog><button autofocus>Close</button><p>Invalid file. Default text will be used</p></dialog>");
            $("dialog button").on("click",() => {document.querySelector("dialog").close();});
            document.querySelector("dialog").showModal();
        }
    }
    setupGame(){
        $("button").attr('disabled','disabled');
        $("input").attr('disabled','disabled');
        $("main").empty();
        $("main").append("<canvas width='"+document.querySelector("main").clientWidth+"' ></canvas>")
        $("main").append("<p oncopy='return false'>"+this.toTypeText+"</p>");
        $("main").append("<textarea autofocus name='typed' rows='10'></textarea>");
        $("textarea[name='typed']").on("input propertychange",this.updateAreas.bind(this));
        this.beginTime=new Date();
        this.setupCanvas();
    }
    setupCanvas(){
        this.img = new Image();
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");
        this.img.addEventListener("load", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.img, 0, 0,canvas.height,canvas.height);
        });
        this.img.src = "multimedia/imagenes/f1Car.png";
    }
    updateCanvas(){
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let x = (this.correctLetters/this.toTypeText.length)*(canvas.width);
        ctx.drawImage(this.img, x, 0,canvas.height,canvas.height);
    }
    updateAreas(){
        let writtenText = $("textarea[name='typed']").val();
        let toWriteText = $("main p").text();
        let formattedText="";
        let previousLetterSame=undefined;
        let sameLetter;
        this.correctLetters=0;
        for(var index = 1; index <= writtenText.length; index++){
            if(index>toWriteText.length)
                break;
            if(sameLetter=(writtenText.at(index-1)===toWriteText.at(index-1))){/*The same letter*/
                this.correctLetters++;
                if(!previousLetterSame){
                    formattedText+=(previousLetterSame===undefined)?"<ins>":"</del><ins>";
                }
                formattedText+=this.toTypeText.at(index-1);
            }else{/*Different letter*/
                if(previousLetterSame)
                    formattedText+="</ins><del>";
                if(previousLetterSame===undefined)
                    formattedText+="<del>";
                formattedText+=this.toTypeText.at(index-1);
            }
            previousLetterSame=sameLetter;
        }
        if(previousLetterSame !== undefined)
            formattedText+=previousLetterSame?"</ins>":"</del>";
        formattedText+=this.toTypeText.slice(writtenText.length);
        $("main p").empty();
        $("main p").append(formattedText);
        this.updateCanvas();
        if(writtenText.length>=toWriteText.length)
            this.checkEnding();
    }
    checkEnding(){
        if(this.correctLetters!==this.toTypeText.length)
            return;
        this.endTime=new Date();
        let time = ((this.endTime-this.beginTime)/1000);
        let lastTime= localStorage.getItem(this.textName);
        localStorage.setItem(this.textName,time);
        $("main").empty();
        $("main").append("<p>Enhorabuena!</p><p>Tu tiempo fue: "+time+" segundos</p>");
        if(lastTime!=null){
            lastTime=Number(lastTime)
            let comparacion=lastTime>time?"mejorado "+(lastTime-time):"empeorado "+(time-lastTime);
            $("main").append("<p>Has "+comparacion+" segundos respecto al último intento.</p>");
        }
        $("button").removeAttr('disabled');
        $("input").removeAttr('disabled');
    }
}