// Initial first that will only run when page get ready
$(document).ready(function () {
    // Sets "Moment" libraly to Spanish 
    moment.locale('es');

    // Getting current time and setting it to the mentioned div
    $('#timeDiv').text(moment().format("dddd, D [de] MMMM [de] YYYY"));

    // ...
    $(window).resize(function () {
        if ($(window).width() < 850) {
            $('#menu-overlap').css("display", "none");
        } else {
            $('#menu-overlap').css("display", "inline");
        }
    }); 

});