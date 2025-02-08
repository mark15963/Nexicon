/*
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "86fede440b104e44a0473804250802";

  const searchText = document.getElementById("searchText");
  const buttonSearch = document.getElementById("buttonSearch");
  const tableData = document.getElementById("tableData").querySelector("tbody");

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`
      );
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log("error", error);
    }
  };

  buttonSearch.addEventListener("click", async () => {
    const name = searchText.value;
    if (!name) {
      alert("no name");
    } else {
      const data = await fetchData(name);
      console.log(data);
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.innerText = data.location.name;
      tr.appendChild(tdName);
      const tdTemp = document.createElement("td");
      tdTemp.innerText = data.current.temp_c;
      tr.appendChild(tdTemp);
      const tdWeather = document.createElement("td");
      tdWeather.innerText = data.current.condition.text;
      tr.appendChild(tdWeather);
      tableData.appendChild(tr);
    }
  });
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "86fede440b104e44a0473804250802";

  const searchText = document.getElementById("searchText");
  const buttonSearch = document.getElementById("buttonSearch");
  const weatherCard = document.getElementById("weatherCard");
  const cardContent = document
    .getElementById("weatherCard")
    .querySelector(".cardContent");

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`
      );
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log("error", error);
    }
  };

  buttonSearch.addEventListener("click", async () => {
    const name = searchText.value.trim();
    if (!name) {
      alert("Название города");
      return;
    }

    const data = await fetchData(name);
    if (data.error) {
      alert("Город не найден");
      return;
    }
    console.log(data);

    cardContent.innerHTML = "";

    const temp = document.createElement("h3");
    temp.innerText = data.current.temp_c;
    temp.id = "temp";

    var img = document.createElement("img");
    img.src = "https:" + data.current.condition.icon;
    img.id = "icon";

    const weather = document.createElement("p");
    weather.innerText = data.current.condition.text;
    weather.id = "weather";

    const cName = document.createElement("p");
    cName.innerText = data.location.name;
    cName.id = "name";

    cardContent.appendChild(temp);
    cardContent.appendChild(img);
    cardContent.appendChild(weather);
    cardContent.appendChild(cName);

    weatherCard.style.display = "block";
  });
});
