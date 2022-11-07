var datos
var ciudadseleccionada
var res

const addNewCityToLocalStorage = async () => {

    let cities = getCitiesFromLocalStorage();

    try{
        ciudadseleccionada = document.getElementById("agregarCiudad").value;
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


    let newCity = document.getElementById('agregarCiudad').value;
    if(res.status == "404" || res.status == "400"){
        document.getElementById("rojo").style.display='block';
        document.getElementById("verde").style.display='none';
        document.getElementById("amarillo").style.display='none';
    }
    else if (cities.indexOf(newCity)>=0){
        document.getElementById("rojo").style.display='none';
        document.getElementById("verde").style.display='none';
        document.getElementById("amarillo").style.display='block';
    }
    else {
        cities.push(newCity);
        document.getElementById("rojo").style.display='none';
        document.getElementById("verde").style.display='block';
        document.getElementById("amarillo").style.display='none';
    }
    localStorage.setItem("CITIES", JSON.stringify(cities));
}

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

