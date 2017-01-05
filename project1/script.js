/*global $*/

$(document).ready(function(){
    //Write all your jQuery code here

        $("#name").click(function(){
            $("#name").html(" By: Andre Isaac Jr.");
            });
            $("header").click(function(){
            $("header").css("color", "#ad42f4");
        });
        
            $("#appear").click(function(){
                $("#name").show("real");
                });
                
            $("#appear").click(function(){
                $("#name").html("OtakuNerd9");
                });
                
            $(function() {
                $("#girl").hover(
                    function() {
                        $(this).attr("src", "https://i.makeagif.com/media/4-04-2015/Gk102j.gif");
                    },
                    function() {
                        $(this).attr("src", "https://i.ytimg.com/vi/QCw_aAS7vWI/maxresdefault.jpg");
                    }                         
                );                  
            });
            
        $(function() {
                $("#destiny").hover(
                    function() {
                        $(this).attr("src", "https://media4.giphy.com/media/6mvTMtGVGDle0/giphy.gif");
                    },
                    function() {
                        $(this).attr("src", "http://pas-wordpress-media.s3.amazonaws.com/content/uploads/2014/08/destiny4.jpg");
                    }                         
                );                  
            });
            
            $(function() {
                $("#rick").hover(
                    function() {
                        $(this).attr("src", "https://25.media.tumblr.com/17f487c581b13ca6188ec9309e045451/tumblr_mi8ew3ZeIO1rc1o7po2_500.gif");
                    },
                    function() {
                        $(this).attr("src", "http://www.azquotes.com/picture-quotes/quote-it-s-always-hard-to-wrap-up-a-series-the-longer-i-spend-with-the-characters-the-more-rick-riordan-24-58-55.jpg");
                    }                         
                );                  
            });
            
            $(function() {
                $("#steven").hover(
                    function() {
                        $(this).attr("src", "http://www.imgbase.info/images/safe-wallpapers/cartoons/steven_universe/53557_steven_universe.jpg");
                    },
                    function() {
                        $(this).attr("src", "https://i.makeagif.com/media/1-28-2016/UIpbll.gif");
                    }                         
                );                  
            });
            
});