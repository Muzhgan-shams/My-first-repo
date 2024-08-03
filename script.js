function changeCity() {
  let cityName = prompt('What city do you live in?');
  let temperature = prompt('What temperture is it?');
  let h1 = document.querySelector('h1');
  if (temperature > 0) {
    h1.innerHTML = '😃 <br  /> Currently ' + temperature + '°C  in ' + cityName;
  } else {
    h1.innerHTML = '☹️ <br  /> Currently ' + temperature + '°C  in ' + cityName;
  }
}

let cityButton = document.querySelector('button');

cityButton.addEventListener('click', changeCity);
