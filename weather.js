
// Initial function that will only run when page get ready
$(function () {


    //Globals
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

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
            dataType: "json",
            url: "https://api.hgbrasil.com/weather?format=json-cors&key=43874a67&lat=" + lat + "&lon=" + long,
            success: function (response) {
                const cityInfo = response.results;
                const forec = cityInfo.forecast;
                console.log(cityInfo)
                console.log(forec)
                $("#userWeather").append("<h5>" + cityInfo.city_name + "</h5>" +
                    "<h6>" + cityInfo.temp + "°C </h6>" +
                    "<h6>" + cityInfo.description + "</h6>"
                )

                $("#minmax").append(
                    "<h5> Mínima: " + forec[0].min + "°C</h5>" +
                    "<h5> Máxima: " + forec[0].max + "°C</h5>" +
                    "<h5> Humidade: " + cityInfo.humidity + "</h5>" +
                    "<h6> Nascer do Sol: " + cityInfo.sunrise + "</h6>" +
                    "<h6> Pôr do Sol: " + cityInfo.sunset + "</h6>"
                );

                $("#tomorrow").append("<h5> Amanhã </h5>" +
                    "<h6> Mínima: " + forec[1].min + "°C </h6>" +
                    "<h6> Máxima: " + forec[1].max + "°C </h6>" +
                    "<h6>" + forec[1].description + "</h6>"
                )

                $("#aft-tomorrow").append("<h5>" + forec[2].weekday + "</h5>" +
                    "<h6> Mínima: " + forec[2].min + "°C </h6>" +
                    "<h6> Máxima: " + forec[2].max + "°C </h6>" +
                    "<h6>" + forec[2].description + "</h6>")

                $("#aft2-tomorrow").append("<h5>" + forec[3].weekday + "</h5>" +
                    "<h6> Mínima: " + forec[3].min + "°C </h6>" +
                    "<h6> Máxima: " + forec[3].max + "°C </h6>" +
                    "<h6>" + forec[3].description + "</h6>")

                $("#aft3-tomorrow").append("<h5>" + forec[4].weekday + "</h5>" +
                    "<h6> Mínima: " + forec[4].min + "°C </h6>" +
                    "<h6> Máxima: " + forec[4].max + "°C </h6>" +
                    "<h6>" + forec[4].description + "</h6>")


            },
            error: function (errormsg) {
                $("#weather > div > a").append("<h5>Não foi possível determinar sua localização</h6>")
            }
        });

    }




});