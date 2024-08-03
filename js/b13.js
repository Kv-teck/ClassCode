// https:api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric

async function getWeatherData(city) {
    try {
        var apiKey = '09a71427c59d38d6a34f89b47d75975c'; // API key
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        var response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        var data = await response.json();

        // Clear existing content
        var relateds_ls = document.getElementById('weather-container');
        relateds_ls.innerHTML = '';

        // Process and display forecast data
        data.list.forEach(item => {
            var date = item.dt_txt; // Date and time of forecast
            var temperature = item.main.temp; // Temperature
            var weatherMain = item.weather[0].main; // Main weather description
            var weatherDescription = item.weather[0].description; // Detailed weather description
            var weatherIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`; // Weather icon

            var itemHtml = `
                <div class="weather-container" id="weather-container">
                    <p class="name">${city}</p>
                    <p class="data">${date}</p>
                    <p class="temperature">${temperature}℃</p>
                    <p class="weather-main">${weatherMain}</p>
                    <p class="weather-description">${weatherDescription}</p>
                    <img class="weather-icon" src="${weatherIcon}" alt="${weatherDescription}">
                </div>
            `;
            relateds_ls.innerHTML += itemHtml;
        });

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}






