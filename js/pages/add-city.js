function addNewCityToLocalStorage() {
    let newCity = document.getElementById('agregarCiudad').value;
    let cities = getCitiesFromLocalStorage();
    if(cities.indexOf(newCity)>=0){
        document.getElementById("verde").style.display='none';
        document.getElementById("amarillo").style.display='block';
    }
    else {
        cities.push(newCity);
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