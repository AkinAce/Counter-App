import React from 'react';
import {getCountries} from "./data"

const myCountries = getCountries();
const { name, 
        capital,
        currencies,
        flags, 
    } = myCountries[0];

/*let search="afghanistan";
let searchedCountry= myCountries.filter(m => {
   return m.name.toLowerCase() === search.toLowerCase();
})*/

const currencyName= currencies[0].name;
const currencyCode= currencies[0].code;


let myLanguages= Object.values(myCountries[3].languages);

let randomCountry = myCountries[Math.floor(Math.random() * myCountries.length)];
let currentCountry = randomCountry;
console.log(Object.values(myCountries[3].currencies)[0].name);
console.log(myCountries[3])

const Project = () => {
    return ( <div>
        {name} <br/>
        {capital} <br />
        {currencies[0].name} <br />
        {myCountries[1].currencies[0].code} <br />
        {randomCountry.name} <br />
        {currentCountry.name} <br />
        {/*{searchedCountry[0].capital} */}<br />
       { /*<img src={flags.svg} alt="" />*/}
       {currencyCode} <br />
       {currencyName} <br />
       {myCountries[3].name.common} <br />
       {Object.keys(myCountries[3].currencies)} <br />
       {Object.values(myCountries[3].currencies)[0].name} <br />
       {Object.values(myCountries[3].demonyms)[0].m} <br />
      <ul> {myLanguages.map(m => <li key={m}>{m}</li>)}</ul>
       
       {myCountries[3].capital} <br />
       {myCountries[3].region} <br />
       {myCountries[3].subregion} <br />
       {myCountries[3].area} <br />
       {myCountries[3].population} <br />
       {Object.values(myCountries[3].idd)[0]}{Object.values(myCountries[3].idd)[1][0]} <br />
       <img src={myCountries[3].flags.svg} alt= "" />
       <img src={myCountries[3].coatOfArms.svg} alt= "" />
       
        
        
    </div> );
}
 
export default Project;
