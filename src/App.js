import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/*function Countries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  console.log(countries);
  return(
    <div>
    <h2>Travel Around The World</h2>
    <h4>Countries Available : {countries.length}</h4>
    {
      countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
    }
  </div>
  )
}

function Country(props){
  return(
    <div>
      <h3>Country Name : {props.name}</h3>
      <h5>Capital Name : {props.capital}</h5>
    </div>
  )
} */

export default App;
