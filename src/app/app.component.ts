import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
  city: string = '';
  weatherData: any;
  showImage: boolean = true;

  constructor(private http: HttpClient) { }

  getWeather(city?: string) {
    if (city) {
      this.http.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
        headers: {
          'X-RapidAPI-Key': '9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      }).subscribe((data: any) => {
        this.weatherData = data;
        this.showImage = false; // Hide the image after getting the weather data
        console.warn("weatherData", data);
      });
    }
  }}