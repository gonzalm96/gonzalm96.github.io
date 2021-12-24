$(function(){
    $("#butt").click(function(){
        $("#vert").animate({height: 0}, 2000, function() {
            $("#zontal").animate({width: 0}, 2000)
        });
        setTimeout(function(){$("#modal").fadeOut()},1200);
    });
});
