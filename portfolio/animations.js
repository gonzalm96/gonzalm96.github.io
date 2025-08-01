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
            $("#keyboards").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#keyboards-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#keyboards-desc").animate({height: 0}, 300);       
                }
            );
            $("#portfolio").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#portfolio-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#portfolio-desc").animate({height: 0}, 300);       
                }
            );
            $("#thumb").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#thumb-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#thumb-desc").animate({height: 0}, 300);       
                }
            );
            $("#financial").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#financial-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#financial-desc").animate({height: 0}, 300);       
                }
            );
            $("#foster").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#foster-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#foster-desc").animate({height: 0}, 300);       
                }
            );

            $("#atm").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#atm-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#atm-desc").animate({height: 0}, 300);       
                }
            );

            $("#austin").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#austin-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#austin-desc").animate({height: 0}, 300);       
                }
            );

            $("#extension").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#extension-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#extension-desc").animate({height: 0}, 300);       
                }
            );

            $("#fuzzy").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#fuzzy-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#fuzzy-desc").animate({height: 0}, 300);       
                }
            );

            $("#fuzzy-britch").hover(
                function () {
                    //fadein second image using jQuery fadeIn 
                    $("#fuzzy-britch-desc").animate({height: '100%'}, 300);        
                }, function (){
                    $("#fuzzy-britch-desc").animate({height: 0}, 300);       
                }
            );
        }
    }
    resizeForm();
});
