$(document).ready(function(){
    var colors=["red","orange","yellow","green","blue","indigo","violet"];
    var colorIndex=0;
    $("#overlay").click(function(){
        $("#overlay").removeClass(colors[colorIndex]);
        colorIndex=(colorIndex+1)%7;
        $("#overlay").addClass(colors[colorIndex]);
    });
});