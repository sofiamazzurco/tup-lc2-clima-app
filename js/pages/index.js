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
    const Ciudad = getCitiesFromLocalStorage();
    /*Ciudades.map((Ciudad)=> return (<option value={Ciudad}>{Ciudad}</option>));*/

    for(var i = 0; i < Ciudad.length; i++) {
        var select = document.createElement("select");
        news.appendChild(select);
        var option = document.createElement("option");
        option.value= Ciudad[i];
        option.innerHTML = Ciudad[i];
        news.appendChild(option);
}
}