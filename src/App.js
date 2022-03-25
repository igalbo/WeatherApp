import useWeatherFetch from "./hooks/useWeatherFetch";
import DayItem from "./components/DayItem/DayItem";
import './App.css'

function App() {
  const [days, isLoading] = useWeatherFetch();

  const showDays = () => {
    if (isLoading) {
      return <h1 className="loading-text">Loading</h1>;
    }
    if (!isLoading) {
      return days.map((day, index) => <DayItem day={day} key={index} />);
    }
  };

  return (
    <div className="App">
      <header>Weather App</header>
      {showDays()}
    </div>
  );
}

export default App;
