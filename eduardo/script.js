$(function(){
    $("#butt").click(function(){
        $("#vert").animate({height: 0}, function() {
            $("#zontal").animate({width: 0})
        });
        setTimeout(function(){$("#modal").fadeOut()},1200);
    });
});
