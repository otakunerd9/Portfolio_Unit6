$(document).ready(function(){
    //Write all your jQuery code here
        $("button").click(function() {
      $(".like").html("You like this project!");
    });
    
     $(function() {
        $(".nav").hover(
            function() {
                $(this).attr("src", "https://i.makeagif.com/media/11-19-2015/JcG1dE.gif");
            },
            function() {
                $(this).attr("backgorund", "transparent");
            }                         
        );                  
    });
    
});

