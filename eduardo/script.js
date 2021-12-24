$(function(){
    $("#butt").click(function(){
        $("#vert").animate({height: 0}, 1000, function() {
            $("#zontal").animate({width: 0}, 1000)
        });
        setTimeout(function(){$("#modal").fadeOut()},1200);
    });
});
