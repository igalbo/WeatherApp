import { useEffect, useState } from "react";

const API_KEY = "RMEjHXc7YdISe6lk69Q8HaGsh0NYrGMB";

function useWeatherFetch(cityCode = 308526) {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";

  useEffect(() => {
    async function getDays() {
      setIsLoading(true);
      const response = await fetch(`${url}${cityCode}?apikey=${API_KEY}&metric=true`);
      const data = await response.json();
      setDays(data?.DailyForecasts);
      setIsLoading(false);
    }
    getDays();
  }, [cityCode]);

  return [days, isLoading];
}

export default useWeatherFetch;
