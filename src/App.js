import "./App.css";
import Country from "./Country";
import Data from "./allCountries.json";

function App() {
  return (
    <div className="main">
      {Data.map((country) => {
        return (
          <Country
            flag={country.flag}
            name={country.name}
            population={country.population}
            capital={country.capital}
            region={country.region}
          />
        );
      })}
    </div>
  );
}

export default App;
