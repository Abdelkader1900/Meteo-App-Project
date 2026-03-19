const btnsearch = document.getElementById("search");
const city = document.getElementById("city");
const result = document.getElementById("result");
const btnreset = document.getElementById("reset");
const btndays4 =  document.getElementById("4days");


function fetched(){
    console.log("Fetched brr brr");
    const name = city.value;
    fetch ("https://geocoding-api.open-meteo.com/v1/search?name="+name)
    .then(latlon => latlon.json())
    .then(latlon => { 
        const lat = latlon.results[0].latitude
        const lon = latlon.results[0].longitude
        document.getElementById("result1").value = "Latitude : " +lat ;
         document.getElementById("result2").value = "Longitude :" + lon ;
        
        return fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=temperature_2m&current=relative_humidity_2m&daily=temperature_2m_max&forecast_days=4");
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.current.temperature_2m)
        document.getElementById("result3").value = "Temperature  : " +data.current.temperature_2m;
        document.getElementById("result4").value = "Humidity  : " +data.current.relative_humidity_2m+"%";
        document.getElementById("forecast-container").innerHTML = "";
        for (let i =1 ; i<5 ; i++){
                
            const card = document.createElement("div");
            card.id = ("div"+i);
            const titre = document.createElement("h2")
            const texte = document.createElement("p")
            card.classList.add("day-card"); 
            card.appendChild(titre);
            card.appendChild(texte);
            card.style.display = "flex";
            card.style.flexDirection = "column";
            titre.textContent = ("Day + "+i)
            texte.textContent = data.daily.temperature_2m_max[i-1] + " °C";
            document.getElementById("forecast-container").appendChild(card);
        }
            })
    .then(console.log(" ------------- Everything is OK ! ------------- "))
}

function reset (){
    document.getElementById("result1").value = "Latitude : ";
    document.getElementById("result2").value = "Longitude : ";
    document.getElementById("result3").value = "Temperature : ";
    document.getElementById("result4").value = "Humidity : ";
    document.getElementById("forecast-container").innerHTML = "";

}


btnsearch.addEventListener("click", fetched);
btnreset.addEventListener("click", reset);
