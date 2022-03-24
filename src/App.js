import useWeatherFetch from "./hooks/useWeatherFetch";
import DayItem from "./components/DayItem/DayItem";

function App() {
  const [days, isLoading] = useWeatherFetch();

  const showDays = () => {
    if (isLoading) {
      return <p>Loading</p>;
    }
    if (!isLoading) {
      return days.map((day, index) => <DayItem day={day} key={index} />);
    }
  };

  return (
    <div className="App">
      <header className="App-header">Weather App</header>
      {showDays()}
    </div>
  );
}

export default App;
