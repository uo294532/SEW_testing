class Noticias{
    constructor(){
        if(window.File){
            $("input:last()").on("change",()=>this.readInputFile($("input:last()").prop("files")));
        }else
            $("main").append("<p>Este navegador no tiene soporte para la API necesaria. Para ver las noticias, porfavor use otro navegador.</p>");
        let createNoticia=(function () {
            console.log(this);
            let title=$("input[name='Titulo']").val();
            let text=$("textarea[name='Texto']").val();
            let author=$("input[name='Autor']").val();
            this.createNoticia(title,text,author);
        }).bind(this);
        $("button").on("click",createNoticia);
    }
    createNoticia(title,text,author){
        title=$("<h3></h3>").append(title);
        text=$("<pre></pre>").append(text);
        author=$("<p></p>").append("Escrito por: "+author);
        let article = $("<article></article>").append(title,text,author);
        $("main").append(article);
    }
    readInputFile(files){
        let file = files[0];
        let tipoTexto = /text.*/;
        if (file.type.match(tipoTexto)) {
            var lector = new FileReader();
            lector.onload = function (evento) {
                let lineas = lector.result.split('\n');
                lineas.forEach(element => {
                    let line = element.split("_");
                    let title=$("<h3></h3>").append(line[0]);
                    let text=$("<p></p>").append(line[1]);
                    let author=$("<p></p>").append("Escrito por: "+line[2]);
                    let article = $("<article></article>").append(title,text,author);
                    $("main").append(article);
                });
            }      
            lector.readAsText(file);
        }else {
            console.log("Error : ¡¡¡ Archivo no válido !!!");
        }     
    }
}
