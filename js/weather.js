let weather = {
    apiKey: "e3b17e0103f4f51c2ec24658e0dbeff6",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description } = data.weather[0];
        const {temp, temp_min, temp_max} = data.main;
        console.log( name, icon, description, temp, temp_min, temp_max)
        document.querySelector(".weather__city").innerText = "Weather in " + name;
        document.querySelector(".weather__icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
 }
};