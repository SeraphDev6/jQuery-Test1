$(document).ready(function(){
    $(".hidden").slideUp(0);
    var colors=["red","orange","yellow","green","blue","indigo","violet"];
    var colorIndex=0;
    var ballPos=[200,400,0]
    var ballSayings=["Don't<br>touch<br>me","HEY!!!","I<br>SAID<br>DON'T<br>TOUCH<br>ME!!","Fine..<br>I don't<br>care","But<br>there are<br>FAR more<br>intersting things<br>on this<br>page","Like<br>THIS!!<br><br>Pretty cool,<br>right?","Isn't<br>that so<br>much more<br>FUN?!!"]
    var batsSquished=0;
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
        $("*").append("<div class='blarg-box'>BLARG!</div>")
        $("#hidden-div").text("OH NO! Now you've done it!")
        setTimeout(function(){
        $("#hidden-div").append("<div id='clickme'><p>Click me to get rid of all the Blargs....</p></div>")
        $("#clickme").click(function(){
            alert("BLARG!!!");
            $(this).fadeOut("slow");
            $(".blarg-box").fadeOut("slow");
            $("#hidden-div").text("That was a close call...");
            $("#fade-in-div").fadeIn("slow");
            setTimeout(function(){
                $("#hidden-div").append("<p>What is going on with that weird cave???</p>");
            },200);
        });
        },2000);
    });
    $("#cave").click(function(){
        $(this).before('<img class="bat" src="img/bat.png" alt="bat"/>');
        $(this).after('<img class="bat" src="img/bat.png" alt="bat"/>');
        $(".bat").hover(function(){
            $(this).fadeOut("fast");
            batsSquished++;
            if(batsSquished%5==0){
                $("#final-boss").slideToggle("slow")
            }
        });
    });
    var clicked=false;
    $("#final-boss").click(function(){
        ballPos[0]=200;
        ballPos[1]=200;
        $("#ball").html("<p>Fine,<br>I guess<br>I can help<br>Click him<br>when I'm<br>red!</p>")
        $("#ball").css("top","200px")
        $("#ball").css("left","200px")
        if(clicked && $("#ball").attr("class")=="red"){
            $("#ball").css("top","400px");
            $("#ball").css("left","50%");
            setTimeout(function(){
                $("#final-boss").css("transform","rotate(270deg)");
                $("#ball").html("<p><br>GOOD JOB!</p>");
                $("#final-boss").html("<p class = 'big'>NOOOOOOOO!O!!!!!O!O!!!!!!!!</p><p>How dare you!!</p><p>I will never forget the name of my sworn enemy!</p><h1>"+$("#name-box").val()+"</h1>");
            },500);
        }
        clicked=true
    });
});

