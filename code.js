document.addEventListener("DOMContentLoaded", async () => {
  /*https://www.weatherapi.com/api-explorer.aspx#current*/
  const apiKey = "86fede440b104e44a0473804250802";

  const buttonSearch = document.getElementById("buttonSearch");
  const weatherCard = document.getElementById("weatherCard");
  const cardContent = document.getElementById("weatherCard").querySelector(".cardContent");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Moscow&aqi=no&lang=ru`);
      const data = await response.json();
      console.log("API response:", data);

      if(data.error){
        console.log("API error:", error);
        return null;
      }
      
      return data;
      
    } catch (error) {
      console.log("Fetch error:", error);
      return null;
    }
  };

  const data = await fetchData();
  if(!data || !data.current){
    alert("Error");
    return;
  }

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
