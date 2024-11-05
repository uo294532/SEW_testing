'use strict'
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
        return "<ul><li>"+this.nombreCircuito+"</li><li>Población: "+this.población+"</li><li>"+this.formaGobierno+"</li><li>"+this.religión+"</li></ul>";
    }
    escribeCoordenadas(){
        document.write("<p>Coordenadas: "+this.latMeta+","+this.longMeta+"</p>");
    }
}

var pais = new País("China","Beijing","Shanghai International Circuit","1409670000","Unitary Marxist–Leninist one-party socialist republic");
        pais.ponerMetaCircuito(30,30);
        pais.religiónMayoritaria("Budismo")
        document.write("<h2>"+pais.getNombrePaís()+"</h2>")
        document.write("<h3>"+pais.getCapital()+"</h3>")
        pais.escribeCoordenadas();
        document.write(pais.getListaDetallesPaís());