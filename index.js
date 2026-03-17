const btnsearch = document.getElementById("search");
const city = document.getElementById("city");
const result = document.getElementById("result");


function fetched(){
    console.log("Fetched brr brr");
    const name = city.value;
    // fetch("https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m")
    fetch ("https://geocoding-api.open-meteo.com/v1/search?name="+name)
    .then(latlon => latlon.json())
    .then(latlon => { 
        const lat = latlon.results[0].latitude
        const lon = latlon.results[0].longitude
        document.getElementById("result").value = "latitude : " +lat + " || longitude :" + lon ;
    })


}

btnsearch.addEventListener("click", fetched);




