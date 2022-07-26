let boton = document.querySelector("button");
let input = document.querySelector("input");

function cargarCiudad() {
  ciudad = input.value;
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      ciudad +
      "&appid=fdd533266e28101881f610f2b8f1ebe1&units=metric&lang=es",
    function (data) {
      console.log(data);
      document.querySelector("#ciudad").textContent = data.name;
      document.querySelector("#temperatura").textContent = data.main.temp;
      document
        .querySelector("#wicon")
        .setAttribute(
          "src",
          `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        );
      document.querySelector("#descripcion").textContent =
        data.weather[0].description;
    }
  )
  .fail(function () {
    alert("Ciudad no encontrada");
  });

  document.querySelector(".container").style.visibility = "visible";

  input.value = "";
}

boton.addEventListener("click", function () {
  if (input.value != "") {
    cargarCiudad();
  } else {
    alert("Debe ingresar el nombre de una ciudad");
  }
});

// 'http://api.openweathermap.org/data/2.5/weather?q=   San%20Francisco    &appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es'

// let apiId = 'a2300581f8821b44ff3d155b96205b65'
// let ciudad = 'buenos aires'

// function cargarCiudad() {
//     $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiId}&units=metric&lang=es`, data => console.log(data))
// }

// cargarCiudad()

// 01f4059157eb2141105d39a1614a6d48

// https://home.openweathermap.org/
// https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=01f4059157eb2141105d39a1614a6d48&units=metric&lang=es
