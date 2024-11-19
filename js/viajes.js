class Viajes{
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.errorFunction.bind(this));
    }
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;
        this.getMapaEstaticoGoogle();       
    }
    errorFunction(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización";
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible";
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado";
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido";
            break;
        }
        $("body").append("<p>"+this.mensaje+"</p>");
    }
    verTodo(){
        let datos='<p>'+ this.mensaje + '</p>'; 
        datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
        datos+='<p>Latitud: '+this.latitud +' grados</p>';
        datos+='<p>Precisión de la longitud y latitud: '+ this.precision +' metros</p>';
        datos+='<p>Altitud: '+ this.altitude +' metros</p>';
        datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
        datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
        datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';
        $("main").append(datos);
    }
    getMapaEstaticoGoogle(){
        var ubicacion=$("body");
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom ="&zoom=15";
        let width = Math.round(ubicacion.width());
        var tamaño= "&size="+width+"x"+width;
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false"; 
        var apiKey="&key=AIzaSyB1Thy6jl0ZgBTk-DldSMQMAKbP0x-1AOg";
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
        ubicacion.append("<img src='"+this.imagenMapa+"' alt='mapa estático google' />");
    }
    initMap(){  
        var infoWindow = new google.maps.InfoWindow({});
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var mapaDinámico = new google.maps.Map(document.getElementsByTagName('div')[0],{
                    zoom: 8,
                    center:pos,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: true,
                    scaleControl:true,
                    fullscreenControl:true
                });
                infoWindow.setPosition(pos);
                infoWindow.setContent('Localización encontrada');
                infoWindow.open(mapaDinámico);
                mapaDinámico.setCenter(pos);
            }, function() {
                this.handleLocationError(true, infoWindow, pos);
            });
        } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, mapaDinámico.getCenter());
        }
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: Ha fallado la geolocalización' :
                                'Error: Su navegador no soporta geolocalización');
        infoWindow.open(this.mapaDinámico);
    }
}