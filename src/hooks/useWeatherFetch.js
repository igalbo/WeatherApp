import { useEffect, useState } from "react";

const API_KEY = "HYQHGXCVqtJAwG1gQnJxdOQODJsoQ3tc";

function useWeatherFetch(cityCode = 308526) {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

  useEffect(() => {
    async function getDays() {
      setIsLoading(true);
      const response = await fetch(`${url}${cityCode}?apikey=${API_KEY}`);
      const data = await response.json();
      setDays(data?.DailyForecasts);
      setIsLoading(false);
    }
    getDays();
  }, [cityCode]);

  return [days, isLoading];
}

export default useWeatherFetch;
