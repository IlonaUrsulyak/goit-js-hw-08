import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputSearch = document.querySelector('#search-box');
const countryList = document.querySelector('ul');
const countryInfo = document.querySelector('div');


inputSearch.addEventListener('input', _.debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
    event.preventDefult();
    fetchCountries();
    
    
}

function fetchCountries({name, capital, population, flags, languages }){
    return fetch('https://restcountries.com/v3.1/name/{name}?fields=name,capital,population,flags,languages')
        .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
            return response;
})
};
