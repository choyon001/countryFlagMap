const CountriesId = document.getElementById('countriesId');


const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response=>Response.json())
    .then(data=>displayCountries(data));
}
loadCountries();

const displayCountries = data=>{
    for (const country of data) {
        // console.log(country.capital);

        const div = document.createElement('div');
        div.classList.add('countryStyle');
        const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        const p = document.createElement('p');
        p.innerText = country.capital;
        const button = document.createElement('button');
        button.innerText = 'details';
        button.addEventListener('click',()=>{showDetails(country.name.common)});
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(button);
        CountriesId.appendChild(div);
    }
}

const showDetails = (name)=>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => countryAndFlag(data[0]))
}

const countryAndFlag = (data)=>{
    const flagAndCountry = document.getElementById('flagAndCountry');
    flagAndCountry.innerHTML = `
    <h5>${data.name.common}</h5>
    <h5> Google-Map Link :'${data.maps.googleMaps}'</h5>
    <h5> Open-Street-Map Link :'${data.maps.openStreetMaps}'</h5>

    <img src='${data.flags.png}'>
    `;
    // console.log(data);
}
