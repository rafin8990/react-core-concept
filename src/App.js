import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
     <Countries></Countries>
    </div>
  );
}



/* function LoadCountries(){
  const [countries , setCountries]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h1>I want to go world all countries</h1>
      <h3>available countries : {countries.length}</h3>
      {
        countries.map(country=><Country name={country.name} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Population:{props.population}</h3>
    </div>
  )
} */

export default App;
