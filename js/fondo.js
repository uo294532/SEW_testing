class Fondo{
    constructor(nombrePaís, capital, nombreCircuito){
        this.nombrePaís=nombrePaís;
        this.capital=capital;
        this.nombreCircuito=nombreCircuito;
        //this.list = this.getImage();
        this.image = this.getImage2();
    }
    getImage(){
        let flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let listSources=[];
        $.getJSON(flickrAPI, 
                {
                    tags: "F1, "+this.nombreCircuito,
                    format: "json"
                }).done(function(data) {
                    console.log(data);
                    $.each(data.items, function(i,item ) {
                        listSources[i]=item.media.m;
                    });
        });
        return listSources;
    }
    getImage2(){
        let searchAPI = "https://www.flickr.com/services/rest/?"
        let listSources=[];
        $.getJSON(searchAPI, 
                {
                    method: "flickr.photos.search",
                    api_key:"06b2e3d3d6063508659b67608583e7ed",
                    text:this.nombreCircuito,
                    tags:"F1",
                    per_page:1,
                    page:1,
                    format: "json",
                    nojsoncallback:1
                }).done(function(data) {
                    console.log(data);
                    var image_back = "https://live.staticflickr.com/"+data.photos.photo[0].server+"/"+data.photos.photo[0].id+"_"+data.photos.photo[0].secret+"_b.jpg"
                    
                    $("body").css("background-image", 'url("'+image_back+'")').css("background-repeat","no-repeat").css("background-size","100%");
                    return;
        });
    }
}