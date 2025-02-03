let url = "https://restcountries.com/v3.1/name/";

// import html to change 
let searchCountry = document.querySelector(".search-country");
let searchBtn = document.querySelector(".search-country-name");
let showName = document.querySelector('.country-name');
let showCapital = document.querySelector('.country-capital');
let showContinent = document.querySelector('.country-continent');
let countryGoogle = document.querySelector('.country-googlemap');
let countryOpenStreet = document.querySelector('.country-openStreet-Maps');
let countryArea = document.querySelector('.country-area');
let countryStamp = document.querySelector('.country-stamp');
let countryFlagDescription = document.querySelector('.country-flag-description');
let countryFlag = document.querySelector('.country-flag');
let countryRegion = document.querySelector('.country-region');
let countryStartOfWeek = document.querySelector('.country-startofWeek');
let countryOfficialStatus = document.querySelector('.country-official-status');
let countrySubregion = document.querySelector('.country-subregion');
let countryTimezone = document.querySelector('.country-timezone');
let countryDomainName = document.querySelector('.country-domain-name');



//html dynamically change option after clicking the button.
searchBtn.addEventListener("click", async() => {
    // getting the country value from the search option 
    let country = searchCountry.value;
    // getCountryDetail(country);
    console.log(country)

    
    // Calling the function. 
    getCountryDetail(country);


});


// fetching the url and the detail 
async function getCountryDetail(name) {
    try {
        let getFirst = await fetch(url + name);
        let secondStep = await getFirst.json();
        console.log(secondStep);

        // Writing for the name of the country. 
        showName.innerHTML = secondStep[0].name.common;

        // For the capital of the country. 
        showCapital.innerHTML = `Capital City: ${secondStep[0].capital[0]}`;

        // For the continent.
        showContinent.innerHTML = `Continent: ${secondStep[0].continents[0]}`;

        // For the google map location.
        countryGoogle.href = secondStep[0].maps.googleMaps;

        // For the open street map.
        countryOpenStreet.href = secondStep[0].maps.openStreetMaps;

        // Country Area
        countryArea.innerHTML = `The area of the country is: ${secondStep[0].area}`;



        //Country stamp
        countryStamp.src = secondStep[0].coatOfArms.png;

        // Country Flag 
        countryFlagDescription.innerHTML = secondStep[0].flags.alt;
        countryFlag.src = secondStep[0].flags.png; 


        // Country status and the region. 
        countryRegion.innerHTML = `Country Region: ${secondStep[0].region}`;
        countryStartOfWeek.innerHTML = `Start-day: ${secondStep[0].startOfWeek}`;
        countryOfficialStatus.innerHTML = `Country status: ${secondStep[0].status}`;
        countrySubregion.innerHTML = `Country Subregion: ${secondStep[0].subregion}`;
        
        // Country Timezone 
        countryTimezone.innerHTML = `Timeone: ${secondStep[0].timezones[0]}`;

        // Country Domain name 
        countryDomainName.innerHTML = `Country domain: ${secondStep[0].tld[0]}`
    } catch (err) {
        console.log(err);
    }

}


