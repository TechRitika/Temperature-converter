function convert() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var scale = document.getElementById("scale").value;

  if (scale === "celsius") {
    var fahrenheit = temperature * 9 / 5 + 32;
    var kelvin = temperature + 273.15;
  } else if (scale === "fahrenheit") {
    var celsius = (temperature - 32) * 5 / 9;
    var kelvin = celsius + 273.15;
  } else {
    var celsius = temperature - 273.15;
    var fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
  }

  document.getElementById("result").innerHTML = scale + " : " + temperature + " = " + celsius + "°C / " + fahrenheit + "°F / " + kelvin + "K";
} 

