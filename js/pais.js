class País{
    constructor(nombre,capital,circuito,población,formaGobierno){
        this.nombre=nombre;
        this.capital=capital;
        this.nombreCircuito=circuito;
        this.población=población;
        this.formaGobierno=formaGobierno;
    }
    ponerMetaCircuito(latMeta,longMeta){
        this.latMeta=latMeta;
        this.longMeta=longMeta;
    }
    religiónMayoritaria(religión){
        this.religión=religión;
    }
    getNombrePaís(){
        return this.nombre;
    }
    getCapital(){
        return this.capital;
    }
    getListaDetallesPaís(){
        return "<ul><li>"+this.nombreCircuito+"</li><li>"+this.población+"</li><li>"+this.formaGobierno+"</li><li>"+this.religión+"</li></ul>";
    }
    escribeCoordenadas(){
        document.write("<p>Coordenadas: "+this.latMeta+","+this.longMeta+"</p>");
    }
}