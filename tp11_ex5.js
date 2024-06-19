$(document).ready(function(){
    function felement(){
        var values = document.getElementById("nouvelElement").value;
        var liste = document.createElement("li");
        $("#maListe").append(liste);
        liste.innerText=values;
        $("#nouvelElement").val("");

        $(liste).dblclick(function(){
            $(this).remove();
        })
    }
    $("#ajouter").click(felement);
})