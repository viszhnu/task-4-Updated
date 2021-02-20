var request = new XMLHttpRequest();

request.open("GET", 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload=function(){
    
  var data=JSON.parse(this.response);

  // 1. Get all the countries from Asia continent /region using Filter function

  var ans=data.filter((item)=> {if(item.region==="Asia"){return item}});
  console.log("1. COUNTRIES FROM ASIA:");
  console.log(ans);

  // 2. Get all the countries with population of less than 2 lacs using Filter function
 
  ans=data.filter((item)=>{if(item.population<200000){return item}});
  console.log("\n\n2. COUNTRIES WITH POPULATION LESS THAN 2LAKHS");
  console.log(ans);

  // 3. Print the following details name, capital, flag using forEach function

  console.log("\n\n3. COUNTRIES NAME, CAPITAL, FLAG USING forEach():\n");
  data.forEach((element) => {
      console.log("NAME: "+element.name);
      console.log("CAPITAL: "+element.capital);
      console.log("FLAG: "+element.flag+"\n\n");
  });

  // 4. Print the total population of countries using reduce function

  var res=data.reduce((a, b)=>{return a+b.population}, 0);
  console.log("\n\n4. TOTAL POPULATION: "+res);
  
 // 5. Print the country which use US Dollars as currency.
 
 console.log("\n\n5. COUNTRIES WHICH USE US DOLLARS:");
 ans=data.reduce((anss, item)=>{
     var ans1=item.currencies.reduce((ress, item1)=>{
         if(ress===true){
             return true;
         }else if(item1.code==="USD"){
             return true;
            }}, false)
    if(ans1){
        anss.push(item);
    }
    return anss;
 },[]);

 console.log(ans);

}