const searchForm = document.querySelector(".search_form");
const searchInput = document.querySelector(".search_input");
const cityName = document.querySelector(".city_name");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const weather_icon = document.querySelector(".weather_icon");
const forecast = document.querySelector(".weather_forecast");
const temp = document.querySelector(".temperature");
const min = document.querySelector(".min_temp");
const max = document.querySelector(".max_temp");
const suggest = document.querySelector(".suggestion");
const feelsLike = document.querySelector(".temp_val");
const windSpeed = document.querySelector(".speed_value");
const humid = document.querySelector(".humid_value");
const pressure = document.querySelector(".pressure_value");

// Getting actual country name or say full name:
const countryName = (code) => {  // Added parameter 'code'
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code); // Now uses the passed 'code'
};

// Defining the suggestion function here
const getSuggestion = (temp) => {
    if (temp < 10) return "Suggestion: Bundle up, it's cold!❄️";
    if (temp < 20) return "Suggestion: Wear a light jacket.🧥";
    if (temp < 30) return "Suggestion: Perfect for a walk!🚶";
    return "Suggestion: Stay hydrated, it's pretty hot!🥤";
};

// Defining the weather icon function here
const getWeatherIcon = (main) => {
    const icons = {
        Clear: '<i class="fa-solid fa-sun"></i>',
        Clouds: '<i class="fa-solid fa-cloud" ></i>',
        Rain: '<i class="fa-solid fa-cloud-rain" ></i>',
        Drizzle: '<i class="fa-solid fa-cloud-drizzle"></i>',
        Thunderstorm: '<i class="fa-solid fa-bolt"></i>',
        Snow: '<i class="fa-solid fa-snowflake"></i>',
        Mist: '<i class="fa-solid fa-smog"></i>'
    };
    return icons[main] || '<i class="fa-solid fa-cloud" style="color: #000000"></i>';
};

// Weather Information Data
const getWeatherData = async (searchCity = null, clearInput = false) => {  // Added params: searchCity for dynamic queries, clearInput flag
    let weatherURL;
    if (searchCity) {
        // Use city name for search queries
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&appid=8bc581c99e5187f0c12b9fc7e84fc0f5&units=metric`;
    } else {
        // Fallback to hardcoded lat/lon for initial load (e.g., default location)
        weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=26.4831&lon=87.2834&appid=8bc581c99e5187f0c12b9fc7e84fc0f5&units=metric`;
    }

    try {
        const response = await fetch(weatherURL);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found—try a different name!");
            }
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json(); // This will convert or say asynchronously parse the JSON string into a JS object.
        const { main, name, sys, dt, wind, weather } = data;  
        console.log(data);

        cityName.textContent = "Loading...";
        cityName.textContent = `${name}, ${countryName(sys.country)}`;  // Now passes sys.country correctly

        const localDate = new Date(dt * 1000); // Converting it to milliseconds
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const daysName = days[localDate.getDay()]; // Getting the current day according to the time fetched in milliseconds.
        const formattedDate = localDate.toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
        date.textContent = `${daysName}, ${formattedDate}`; // This works for taking out day, and date along with year.

        // Since, we only need hour and minute, so we can remove the seconds here.
        time.textContent = localDate.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true // Works for 12-hour clock system
        });

        // Updating the weather icon
        const weatherMain = weather[0].main;
        weather_icon.innerHTML = getWeatherIcon(weatherMain); // We need to define this function

        // Updating report of forecast like: Cloudy, Sunny, etc.
        forecast.textContent = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);

        // Updating the temperature, minimum, and maximum
        temp.textContent = `${Math.round(main.temp)}°C`;
        min.textContent = `Min: ${Math.round(main.temp_min)}°C`;
        max.textContent = `Max: ${Math.round(main.temp_max)}°C`;

        // Updating suggestion according to temperature
        suggest.textContent = getSuggestion(main.temp); // Define the function

        // Updating the details of the place : feels like, humidity, windspeed, pressure
        feelsLike.textContent = `${Math.round(main.feels_like)}°C`;
        windSpeed.textContent = `${wind.speed.toFixed(2)} m/s`;
        humid.textContent = `${main.humidity}%`;
        pressure.textContent = `${main.pressure} hPa`;

    if (clearInput) searchInput.value = ''; // Will clear input after successful search
    } catch (error) {
        console.error("Couldn't fetch the API:", error);  // Use console.error for better logging
        cityName.textContent = error.message || "Something went wrong—check connection!";
    }
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = searchInput.value.trim(); // Will trim whitespaces
    // Edge cases 
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    // If the city name is too short
    if (city.length < 2) {
        alert("City name too short—try to give full name");
        return;
    }
    // Now actually fetch data for the city
    getWeatherData(city, true);  // Pass city and clearInput flag
});

window.addEventListener('load', () => {
    getWeatherData();  // Initial load with default location
});
// NEW: Theme Toggle Logic (with localStorage persistence)
const themeToggle = document.getElementById('theme-icon');
const body = document.body;

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
    }
};

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle on click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});