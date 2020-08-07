var $ = jQuery;

$(document).ready(function(){
    $('.header').mouseover(function(){
            $(".fakeheader").css({"top":"0", "left":"0"});
            $(".nav_link").css({"color":"#88868B"});
            $(".nav_link_ethics").css({"color":"#88868B"});
            $(".nav_link_sales").css({"color":"#88868B"});
        },

    );

    $('.header').on('mouseout', function(){
            $(".fakeheader").css({"top":"-120px", "left":"0"});
            $(".nav_link").css({"color":"#fff"});
            $(".nav_link_ethics").css({"color":"#fff"});
            $(".nav_link_sales").css({"color":"#fff"});
        },

    );
});
