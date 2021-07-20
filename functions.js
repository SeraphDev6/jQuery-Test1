$(document).ready(function(){
    $("#hidden-div").slideUp(0);
    $("#other-hidden-div").slideUp(0);
    var colors=["red","orange","yellow","green","blue","indigo","violet"];
    var colorIndex=0;
    var ballPos=[200,400,0]
    var ballSayings=["Don't<br>touch<br>me","HEY!!!","I<br>SAID<br>DON'T<br>TOUCH<br>ME!!","Fine..<br>I don't<br>care","But<br>there are<br>FAR more<br>intersting things<br>on this<br>page","Like<br>THIS!!<br><br>Pretty cool,<br>right?","Isn't<br>that so<br>much more<br>FUN?!!"]
    function changeColor(){
        $(this).removeClass();
        colorIndex=(colorIndex+1)%7;
        $(this).addClass(colors[colorIndex]);
    }
    $("#overlay").click(changeColor);
    $("#hide-text").click(function(){
        $("h1, h2, h3, h4, h5, h6, p").hide();
    });
    $("#show-text").click(function(){
        $("h1, h2, h3, h4, h5, h6, p").show();
    });
    $("#toggle-buttons").click(function(){
        $("#hide-text, #show-text").toggle();
    });
    $("#ball").hover(function(){
        ballPos[0]+=Math.random()*200-100;
        ballPos[1]+=Math.random()*200-100;
        ballPos[2]++;
        if(ballPos[2]==ballSayings.length){
            $("#ball p").html("THATS<br>IT!!<br>I'M<br>LEAVING!!!!!!")
            setTimeout(function(){
                $("#ball").css("top","-1000px");
                $("#ball").css("left","1000px");
            },2000);
        }
        else{
            if(ballPos[2]==5){
                $("#hidden-div").slideDown("slow",function(){$("#other-hidden-div").slideDown("slow")})
            }
            $(this).css("top",ballPos[0]+"px");
            $(this).css("left",ballPos[1]+"px");
            $("#ball p").html(ballSayings[ballPos[2]])
        }
    },changeColor);
    $("#other-hidden-div").click(function(){
        $(this).slideUp("fast");
        $("h1,h2,h3,h4,h5,h6,p,div").append("<div class='blarg-box'>BLARG!</div>")
        $("#hidden-div").text("OH NO! Now you've done it!")
    });
});

//slideToggle
//fadeIn
//fadeOut
//.before
//.after
//attr
//val
