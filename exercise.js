// Good Luck! You got this 💪🏾
// Write your code here.


// Functions

function  describeCountry(country,population ,capitalCity){
    console.log(country +' has '+population + ' million people and its captial city is '+ capitalCity );
}
describeCountry('somalind','3.5','Hargeisa');
describeCountry('Bangladesh','168','Dhaka');
describeCountry('Turkey','86','Ankara');

function percentageOfWorld1(country ,population){
  let  pop_percentage= (population / 7900) *100 ;
console.log( country+" has "+ population+ " million people, so it's about " + pop_percentage + " of the world population");
}
const som_world_pop = percentageOfWorld1("Somalia",16);
const turkey_world_pop = percentageOfWorld1("Turkey",86);
const china_world_pop = percentageOfWorld1("China",1441);


// Introduction to arrays

 let population = [86000000,168000000 ,16000000];
 let neighbours =[ "kenya","Djibouti" ,"Ethiopia"]
  
 if(neighbours.length ==4){
    console.log(true)
 }else{
    console.log(false)
 }
 
 //Iteration: for loops

 for(let i=0;i<=2;i++){
    console.log(neighbours[i])
 }
 
 for(let i=2 ;i>=0 ;i--){
    console.log(neighbours[i])
 }

 //Iteration: while loop

 let i = 0
 while(i<2){
  console.log(neighbours[i])
  i++
}

let j = 3
while(j>=0){
 console.log(neighbours[j])
 j--
}
