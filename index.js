const btnsearch = document.getElementById("search");
const city = document.getElementById("city");
const result = document.getElementById("result");


function fetched(){
    console.log("Fetched brr brr");
    const name = city.value;
    fetch ("https://geocoding-api.open-meteo.com/v1/search?name="+name)
    .then(latlon => latlon.json())
    .then(latlon => { 
        const lat = latlon.results[0].latitude
        const lon = latlon.results[0].longitude
        document.getElementById("result1").value = "latitude : " +lat ;
         document.getElementById("result2").value = " longitude :" + lon ;
        
        return fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=temperature_2m");
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.current.temperature_2m)
        document.getElementById("result3").value = "Temperature  : " +data.current.temperature_2m;
            
    });

}

btnsearch.addEventListener("click", fetched);




