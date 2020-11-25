/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
    moment.locale('es');
    $('#timeDiv').text(moment().format("dddd, D [de] MMMM [de] YYYY"));
    $(window).resize(function () {
        if ($(window).width() < 850) {
            $('#menu-overlap').css("display", "none");
        } else {
            $('#menu-overlap').css("display", "inline");
        }
    });

    


});