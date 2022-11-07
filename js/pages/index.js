function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function opcionesSelect() {
    const Ciudades = getCitiesFromLocalStorage();
    Ciudades.map(function(Ciudad){
        document.write('<option value="'+Ciudad+'">'+Ciudad+'</option>');
    })

}

var datos
var ciudadseleccionada
var res

const llamarDatos = async () => {

    try{
        ciudadseleccionada = document.getElementById("desplegableCiudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadseleccionada}&appid=ed8f7775dc254d70a99c257145d2037e&units=metric&lang=es`
        res = await fetch(url);

        if(res.ok){
            datos = await res.json();
            console.log(datos)
            
        }else{
                console.log(res.status);
            }
            
        }catch(err){
        console.log(err)
    }

    if (res.status == "404"){
        console.log("da error")
    }
    else{
        

        divcard.innerHTML = 
        `<h3>${ciudadseleccionada}, ${datos.sys.country}</h3>
        <h3><img src="http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png"></h3>
        <p>Temperatura: ${datos.main.temp}°</p>
        <p>Sensación térmica: ${datos.main.feels_like}°</p>
        <p>Humedad: ${datos.main.humidity}%</p>
        <p>Velocidad del viento: ${datos.wind.speed}km/h</p>
        <p>Presión: ${datos.main.pressure} p</p>`
        document.getElementById("divcard").style.display = "block";
    }

};