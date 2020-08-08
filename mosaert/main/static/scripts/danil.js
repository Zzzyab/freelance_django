var $ = jQuery;

$(document).ready(function(){
    $('.header').mouseover(function(){
            $(".fakeheader").css({"top":"0", "left":"0"});
            $(".nav_link").css({"color":"#383838"});
            $(".nav_link_ethics").css({"color":"#383838"});
            $(".nav_link_sales").css({"color":"#DBB4AF",
            "border":"2px solid #DBB4AF",
            "border-radius":"20px",
            "padding":"0px 15px"});
        },

    );

    $('.header').on('mouseout', function(){
            $(".fakeheader").css({"top":"-120px", "left":"0"});
            $(".nav_link").css({"color":"#fff"});
            $(".nav_link_ethics").css({"color":"#fff"})
            $(".nav_link_sales").css({"color":"#fff",
            "border":"none",
            "padding":"0px"})  
        }

    );
});
