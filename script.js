// Initial function that will only run when page get ready
$(function () {

    //Global variables
    var wasMenuHidden = false;
    var wasClicked = false;
    var wasNavClicked = false;
    const apiKey = 'da15aff893114def837c7eec3c2d0f64'
    const url = 'http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=da15aff893114def837c7eec3c2d0f64'

    //Get Google News
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        console.log(data.articles[0])
    })

    //Insert news within selected div (test)
    function insertNews(div){
        console.log(div)
    }

    // Sets "Moment" libraly to Spanish 
    moment.locale('es');

    // Getting current time and setting it to the mentioned div
    $('#timeDiv').text(moment().format("dddd, D [de] MMMM [de] YYYY"));

    //StartUp Carousel
    function setCarousel() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoWidth: false,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }

    //Return random number between 1 and 3
    function getRandomInt() {
        return (Math.floor(Math.random() * 4) + 1)
    }

    //Insert random template
    function insertTemplate(index) {
        var clone = $("#template" + index).clone().removeAttr('id').removeClass("d-none");
        insertNews(clone);
        $("#new-content").append(clone);

    }

    //Check if page reached the end
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 900) {
            var index = getRandomInt();
            if (index == 4) {
                insertTemplate(index);
                setCarousel();
            } else {
                insertTemplate(index);
            }

        }
    });

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