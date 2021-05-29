$(document).ready(function(){
    let $home = $("#home");
    let $about = $('#about');
    let $project = $('#projects');
    let $resume = $('#resume');
    let $contact = $('#contact');

    let $currentlyShowing = $home;

    //slide to home
    $home.click(function () {
        $("#" + $currentlyShowing.attr('id') + "-content").css("display", "none");
        $('#home-content').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $currentlyShowing = $home;
    });

    //slide to about
    $about.click(function(){
        $("#" + $currentlyShowing.attr('id') + "-content").css("display","none");
        $('#about-content').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $currentlyShowing = $about;
    });

    //slide to projects
    $project.click(function () {
        $("#" + $currentlyShowing.attr('id') + "-content").css("display", "none");
        $('#projects-content').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $currentlyShowing = $project;
    });

    //slide to resume
    $resume.click(function () {
        $("#" + $currentlyShowing.attr('id') + "-content").css("display", "none");
        $('#resume-content').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $currentlyShowing = $resume;
    });

    //slide to contact
    $contact.click(function () {
        $("#" + $currentlyShowing.attr('id') + "-content").css("display", "none");
        $('#contact-content').slideDown({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });
        $currentlyShowing = $contact;
    });
});

$("#fuzzy").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#fuzzy-desc").animate({opacity:100},200);
    }, function(){
        $("#fuzzy-desc").animate({ opacity: 0 },200);
    }
);

$("#flappy").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#flappy-desc").animate({ opacity: 100 }, 200);
    }, function () {
        $("#flappy-desc").animate({ opacity: 0 }, 200);
    }
);

$("#calc").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#calc-desc").animate({ opacity: 100 }, 200);
    }, function () {
        $("#calc-desc").animate({ opacity: 0 }, 200);
    }
);

$("#symply").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#symply-desc").animate({ opacity: 100 }, 200);
    }, function () {
        $("#symply-desc").animate({ opacity: 0 }, 200);
    }
);

$("#odds").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#odds-desc").animate({ opacity: 100 }, 200);
    }, function () {
        $("#odds-desc").animate({ opacity: 0 }, 200);
    }
);

$("#count").hover(
    function () {
        //fadein second image using jQuery fadeIn 
        $("#count-desc").animate({
            opacity: 100
        }, 200);
    },
    function () {
        $("#count-desc").animate({
            opacity: 0
        }, 200);
    }
);