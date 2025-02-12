jQuery(document).ready(function() {
    function resizeForm(){
        var width = (window.innerWidth > 0) ? window.innerWidth : document.documentElement.clientWidth;
        if(width > 499){
            $("#flappy").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#flappy-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#flappy-desc").animate({height: 0}, 300);       
                }
            );

            $("#recs").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#recs-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#recs-desc").animate({height: 0}, 300);       
                }
            );

            $("#symply").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#symply-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#symply-desc").animate({height: 0}, 300);       
                }
            );

            $("#xmas").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#xmas-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#xmas-desc").animate({height: 0}, 300);       
                }
            );

            $("#figma").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#figma-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#figma-desc").animate({height: 0}, 300);       
                }
            );

            $("#github").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#git-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#git-desc").animate({height: 0}, 300);       
                }
            );
        }
    }
    resizeForm();
});
