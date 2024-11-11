class Agenda{
    constructor(){
        this.url="https://api.jolpi.ca/ergast/f1/current";
        $("button").on("click",()=>this.getCarrerasTemporada());
    }
    getCarrerasTemporada(){
        $.ajax({
            dataType:"json",
            url:this.url,
            method:"GET",
            success: function(object){
                let json = object.MRData;
                $("main").remove();
                $("h2").remove();
                let main = $("<main></main>");
                let image= "<img src=multimedia/imagenes/raceIcon.png alt=Race icon/>";
                json.RaceTable.Races.forEach(race => {
                    let date = new Date(race.date+"T"+race.time.replace('Z',''));
                    let fecha=$("<h3></h3>").append(date.toLocaleDateString());
                    let hora=$("<p></p>").append(date.toLocaleTimeString()+" UTC");
                    let nomCarrera=$("<p></p>").append(race.raceName);
                    let nomCircuito=$("<p></p>").append(race.Circuit.circuitName);
                    let coordenadas=$("<p></p>").append("<p>Lat: "+race.Circuit.Location.lat+"</p><p>Long: "+race.Circuit.Location.long+"</p>");
                    main.append($("<article></article>").append(fecha,image,hora,nomCarrera,nomCircuito,coordenadas));
                });
                main.prepend($("<h2></h2>").append("Carreras para la temporada de "+json.RaceTable.season));
                $("body").append(main);
            }
        })
    }
}