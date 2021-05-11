## Functions
1. Write a function called 'describeCountry' which takes three parameters: `country`,`population` and `capitalCity`. Based on this input, the function returns a string with this format: *'Somaliland has 3.5 million people and its captial city is Hargeisa'*
2. Call the function 3 times with input data for 3 different countries. store the return values in 3 different variables and log them to the console.

## Function declaration Vs expression

3. The world population is 7900 million people. Create a function declaration called `percentageOfWorld1` which recieves a `population` value and reutnrs the percentage of the world population that the given population represents. For example, *China has 1441 million people, so it's about 18.2% of the world population*
>**NOTE:** To calculate the percentage, divide the given `population` value by 7900 and then multiply by 100
4. Call `percentageOfWorld1` for 3 populations of countries of your choice, store the results into variables, and log them to the console
5. Create a function expression which does the exact same thing, called `percentageOfWorld2` and also call it with 3 country populations
## Arrow Functions
6. Recreate the last assignment but this time create an arrow function called `percentageOfWorld3`
## Function calling another function 
7. Create a function called `describePopulation`. This function takes two arguements: `country` and `population`, and returns a string like this: *'YOURCOUNTRY has YOURPOPULTAION million people, which is about PERCENTAGE of the world population'*
8. To calculate the percentage, make function `describePopulation` call the `percentageOfWorld1` you created earlier
9. call `describePopulation` with data for 3 countries of your choice.
## Introduction to arrays
10. Create an array containing 4 population values of 4 countries of your choice and store it in a varaible called `population`
11. Log to the console whether the array has 4 elements or not (true or false)
12. Create an array called `percentages` containing the percentages of the world population for these 4 population values. use the function `percentageOfWorld1` that you created earlier.
## Basic array operations (methods)
13. Create an array containing all the neighbouring countries of a country of your choice. Store the array into a varaible called `neighbours`
14. At some point a new country called `Utiopia` is created. Add this new country to the end of your array
15. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
16. If the `neighbours` array does not include the country `Germany` log to the console: *'Probably not a central European country'*
17. Change the name of one of your neighbouring countries. To do that, find the index of the country in the `neighbours` array, and then use that index to change the array at that index position. For example, you can search for `Sweden` in the array, and then replace it with `Republic of Sweden`.
## Introduction to objects
18. Create an object called `myCountry` for a country of your choice, containing properties `country`, `capital`, `language`, `population` and `neighbours`
## Dot vs Bracket notation
19. Using the object from the previous assignment, log a string like this to the console: *'Somaliland has 3.5 million somali-speaking people, 3 neighbouring countries and a capital called Hargeisa.'*
20. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
## Object Methods
21. Add a method called `describe` to the `myCountry` object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the `this` keyword.
22. Call the `describe` method
## Iteration: for loops
23. Add a method called `describe` to the `myCountry` object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the `this` keyword.
## Looping arrays, breaking and continuing 
24. Create an empty array `percentage2` using 'population' array and `percentageOfWorld1` function that you created earlier use for loop and populate `percentage2`
25. Store this array into a varaible called `listOfNeighbors` 
```javascript
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
```
 Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
>**Note:** You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway
26. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array `percentages3`)