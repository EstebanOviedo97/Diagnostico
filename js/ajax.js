$(document).ready(function () {
    $("#productos").click(function () {
        $("#contenido").load("productos.html");
    });
    $("#Kits").click(function () {
        $("#contenido").load("Kits.html");
    });
    $("#home").click(function () {
        $("#contenido").load("home.html");
    });
});
