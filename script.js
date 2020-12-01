
// Initial function that will only run when page get ready
$(function () {

    //Constant Variables
    const template1 = $('#template1');
    //debug
    $("#teste").click(function (e) { 
        $("#template1").clone().appendTo("#new-content");
        
    });

    console.log(template1)
    //Global variables
    var wasMenuHidden = false;
    var wasClicked = false;
    var wasNavClicked = false;

    //Check if page reached the end
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            $("#new-content").append('lorem')
        }
    });

    // Sets "Moment" libraly to Spanish 
    moment.locale('es');

    // Getting current time and setting it to the mentioned div
    $('#timeDiv').text(moment().format("dddd, D [de] MMMM [de] YYYY"));

    //Change menu button color after click
    $("#menu-button").click(function () {
        if (wasClicked == false) {
            $("#clickedMenu").css("display", "block");
            $("#menu-button").css("cssText", "color: black !important;");
            $("#menu-button").css("background-color", "white");
            wasClicked = true;
        } else {
            $("#clickedMenu").css("display", "none");
            $("#menu-button").css("cssText", "color: white !important;");
            $("#menu-button").css("background-color", "#20618");
            wasClicked = false;
        }
    });

    //Check if  the window's width is lower than X, if it is, then the page will readapt to it
    if ($(window).width() <= 884) {
        if (!wasMenuHidden) {
            $(".nav-link").css("display", "none");
            wasMenuHidden = true
        }
    }

    //Remove upper menu itens if window's width is lower than value, and vice and versa
    $(window).resize(function () {
        if ($(window).width() <= 884) {
            if (!wasMenuHidden) {
                $(".nav-link").css("display", "none");
                wasMenuHidden = true
            }
        }

        if ($(document).width() > 884) {
            if (wasMenuHidden) {
                $(".nav-link").css("display", "inline-block");
                wasMenuHidden = false;
            }
        }
    });

    //Shows menu bar while in mobile view
    $(".navbar-toggler").click(function () {
        if (!wasNavClicked) {
            $("#clickedMenu").css("display", "block");
            wasNavClicked = true;
        } else {
            if (wasNavClicked) {
                $("#clickedMenu").fadeOut();
                wasNavClicked = false;
            }
        }

    });

});