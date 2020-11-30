
// Initial function that will only run when page get ready
$(function () {

    //Globals
    var lat;
    var long;

    //Get user location

    //Check if geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Seu navegador não suporta serviços de geolocalização!')
    }

    //Cache lat and long values
    function showPosition(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        $.ajax({
            type: "GET",
            url: "https://api.hgbrasil.com/weather?format=json-cors&key=43874a67&lat="+lat+"&lon="+long,
            success: function (response) {
                const cityInfo = response.results;
                console.log(cityInfo)
                $("#weather > div > a").append("<h5>" + cityInfo.city_name + "</h5>")
                $("#weather > div > a").append("<h6>" +  cityInfo.temp + "°C </h6>")
                $("#weather > div > a").append("<h6>" + cityInfo.description+ "asas</h6>")

                
            }
        });
    }

    


});