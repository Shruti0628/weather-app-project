## **Weather App**🌤️

A responsive, modern weather application built with HTML, CSS, and JavaScript. It fetches real-time weather data via the OpenWeatherMap API, supports city search, displays current conditions with dynamic icons and suggestions, and includes a toggle for switching between light/dark themes for personalized use.

**Live Demo** : [ https://shruti0628.github.io/weather-app-project/](url)

## **Screenshots**
  - Light Theme: 
  
  <img width="364" height="392" alt="Light-Theme-Weather-Application" src="https://github.com/user-attachments/assets/ed0b4e8a-af6e-49ab-8e4f-ef5b07c5ce15" />

  - Dark Theme:
  
  <img width="362" height="395" alt="Dark-Theme-Weather-Application" src="https://github.com/user-attachments/assets/26b12406-1805-495d-ba0c-fea35a65a892" />



## **Features**
1. City Search: Instantly fetch weather for any location via the search bar.
2. Real-Time Data: Temperature, feels-like, humidity, wind speed, pressure, min/max temps, and weather description.
3. Dynamic Weather Icons: Font Awesome icons that adapt to conditions (e.g., sun for clear, clouds for overcast).
4. Temperature-Based Suggestions: Personalized tips like "Wear a light jacket" with emojis.
5. Local Date & Time: Displays the location's current time in 12-hour format.
6. Light/Dark Theme Toggle: Circular button (sun/moon icon) in the header—persists via localStorage.
7. Responsive & Accessible: Mobile-friendly layout with high-contrast themes for better readability.
8. Error Handling: User-friendly messages for invalid cities or API issues.

## 🛠️ Technologies Used
### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and animations
  - CSS Custom Properties (Variables)
  - Flexbox & Grid Layout
  - Responsive Design (Media Queries)
### JavaScript
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries
  - Fetch API - API requests
  - Async/Await - Asynchronous operations
  - LocalStorage API - Theme preference storage
  - Intl API - Country name formatting
  - Event Listeners - User interactions
### External Services
- **OpenWeatherMap API** - Weather data provider
- **Font Awesome CDN** - Icons library
- **Google Fonts** - Custom typography

## **Prerequisites**
  - A modern web browser (e.g., Chrome, Firefox).
  - Free API key from OpenWeatherMap (sign up and replace the hardcoded key     in script.js).

## **Setup & Installation**
  - Clone/Download the Repo:
    - Git: [git clone https://github.com/yourusername/weather-app.git](url)
    - Or download ZIP from GitHub.
  
  - Add Your API Key:
    - Open `script.js`
    - Replace 'YOUR_API_KEY_HERE' with your API key from OpenWeatherMap
      weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchCity)}&appid=YOUR_API_KEY&units=metric`;

  - Run Locally:
    - Open `index.html` in your browser.
    - Defaults to Biratnagar, Nepal—search any city to test.

  - Fonts/Icons: Loaded via CDN—no local files needed.

## **Usage**
  - Load: Shows the default location weather.
  - Search: Type a city (e.g., "New York") and press Enter—updates UI                   instantly.
  - Theme Toggle: Click the circular button (sun/moon icon) to                                switch light/dark modes—saves preference.
  - Units: Metric (°C) by default; edit `&units=metric` in JS for imperial               (°F).
  - Debug: Open console (F12) to view API responses.
Example: Search "London" → Displays "London, United Kingdom" with current temp, cloudy icon, and "Wear a light jacket" suggestion.

## **Potential Enhancements**
1. Geolocation: Auto-detect user location on load.
2. Hourly/Daily Forecast: Integrate OpenWeatherMap's forecast API.
3. Weather-Based Themes: Auto-switch colors (e.g., blue for rain).
4. PWA Support: Add manifest/service worker for offline/app-like experience.
5. Unit Toggle: Switch °C/°F via button.

## **Contributing**
1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request!

Report issues with browser details and screenshots.

## **License**
MIT License—feel free to use, modify, and distribute. See LICENSE for details.

