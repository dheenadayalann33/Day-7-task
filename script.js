//Task
let countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();
countries.onload = function () {
  let data = countries.response;
  let finRes = JSON.parse(data);
  let asianCountries = finRes.filter((x) => x.region === "Asia");   ////Task:- 1

  let populationlessthan = finRes.filter((x) => x.population < 200000);         ////Task:- 2
  
  //console.log(asianCountries);        //if need to print Task:- 1
  //console.log(populationlessthan);    //if need to print Task:- 
  
  finRes.forEach((x)=> console.log(x.name.common,x.capital ,x.flag));        //Task:- 3

  let totalPopulation = finRes.reduce((total, i) => total + i.population, 0);       ////Task:- 4
  console.log(totalPopulation);


  let i = 0;
  finRes.filter((x)=> {                                                             ////Task:- 5
    if( Object.keys(x.currencies).includes('USD') ){
        console.log(x, i = i + 1);
    }
  });
};
