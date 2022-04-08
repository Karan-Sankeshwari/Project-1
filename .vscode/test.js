let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
let response;
let spanishCountries = [];
function searchSpanish(country){
    //console.log(country.languages);
    let languages = country.languages;
    for(let language of languages){
       if(language.name === "Spanish"){
           console.log(country.name)
       }
    }
}
xhr.onload = function(){
    response = JSON.parse(xhr.response);
    //console.log(response)
    response.map(searchSpanish)
}

