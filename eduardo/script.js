$(function(){
    $("#butt").click(function(){
        $("#vert").animate({height: 0}, 200, function() {
            $("#zontal").animate({width: 0}, 200)
        });
        setTimeout(function(){$("#modal").fadeOut()},1200);
    });
});
