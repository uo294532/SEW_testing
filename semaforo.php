<!DOCTYPE HTML>

<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="author" content="Javier Carrasco"/>
    <meta name="description" content="documento con un juego de tiempo de reacción"/>
    <meta name="keywords" content ="F1,coches,fórmula uno,juego f1, juego reacción" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>F1 Desktop-Juegos-Semáforo</title>
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css"/>
    <link rel="stylesheet" type="text/css" href="estilo/layout.css"/>
    <link rel="stylesheet" type="text/css" href="estilo/semaforo_grid.css"/>
    <script src="js/semaforo.js"></script>
</head>
<body>
    <header>
        <h1><a href="index.html">F1 Desktop</a></h1>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="piloto.html">Piloto</a>
            <a href="noticias.html">Noticias</a>
            <a href="calendario.html">Calendario</a>
            <a href="meteorología.html">Meteorología</a>
            <a href="circuito.html">Circuito</a>
            <a href="viajes.html">Viajes</a>
            <a class="active" href="juegos.html">Juegos</a>
        </nav>
    </header>
    <p><a href="index.html">Inicio</a> > <a href="juegos.html" >Juegos</a> > Semáforo</p>
    <h2>Juegos disponibles:</h2>
    <ul>
        <li><a href="memoria.html">Juego de memoria</a></li>
        <li><a href="semaforo.php">Juego de reacción</a></li>
        <li><a href="api.html">Juego de escritura</a></li>
    </ul>
    <main></main>
    <script>
        let semáforo=new Semáforo();
    </script>
</body>