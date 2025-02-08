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
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=moscow&aqi=no&lang=ru`
      );
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log("error", error);
    }
  };

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
