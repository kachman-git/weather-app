export type WeatherData = {
  wind: {
    speed: number;
  };
  id: number;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
};
