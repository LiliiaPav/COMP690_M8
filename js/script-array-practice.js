//STEP 1
//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
// const movies = ["Knockin' on Heaven's Door", "Rocky Road to Berlin", "Love Actually", "20 Days in Mariupol", "Luxembourg, Luxembourg"];
// console.log(movies[1]);

//STEP 2
//Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
// let movies = new Array(5);
// movies[0]="Rocky Road to Berlin";
// movies[1]="Knockin' on Heaven's Door";
// movies[2]="20 Days in Mariupol";
// movies[3]="Luxembourg, Luxembourg";
// movies[4]="The Pianist";
// console.log(movies[0]);

//STEP 3
//Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(5);
// movies[0]="Rocky Road to Berlin";
// movies[1]="Knockin' on Heaven's Door";
// movies[2]="20 Days in Mariupol";
// movies[3]="Luxembourg, Luxembourg";
// movies[4]="The Pianist";
// console.log(movies[0]);
// movies.splice(2, 0, "Forrest Gump");
// console.log(movies.length);

//STEP 4
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// delete movies[0];
// console.log(movies);

//STEP 5
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";
// for (let i in movies) { console.log(movies[i]);} 

//STEP 6
//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";
// for (const movie of movies) {
//     console.log(movie);
//   }

//STEP 7
//Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";
// for (let i in movies.sort()) { console.log(movies[i]);} 

//STEP 8
//Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this 
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";
// for (let i in movies.sort()) { console.log(movies[i]);} 

// let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
// console.log("\nMovies I like:\n");
// for (let i in movies) { console.log(movies[i]);} 
// console.log("\nMovies I regret watching:\n");
// for (let i in leastFavMovies) { console.log(leastFavMovies[i])} 

//STEP 9
//Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";
// for (let i in movies.sort()) { console.log(movies[i]);} 

// let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
// movies=movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());

//STEP 10
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";

// let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
// movies=movies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.slice(-1));

//STEP 11
//Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";

// let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
// movies=movies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.shift());

//STEP 12
//Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
// let movies = [];
// movies[0]="Knockin' on Heaven's Door";
// movies[1]="Forrest Gump";
// movies[2]="20 Days in Mariupol";
// movies[3]="Rocky Road to Berlin";
// movies[4]="The Pianist";
// movies[5]="Gone with the Wind";
// movies[6]="Love Actually";

// let leastFavMovies= ["Holmes & Watson","Doom: Annihilation", "Sharknado"]; 
// movies=movies.concat(leastFavMovies);
// movies.sort().reverse();

// for (let i of movies){
//     if (leastFavMovies.includes(i)){
//         const ind=movies.indexOf(i);
//         if (ind > -1) { 
//             movies.splice(ind, 1); 
//           }
//     }
// }
// console.log(movies);

//STEP 13
//Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
// movies = [["You've Got Mail", 1], ["Forrest Gump", 2], ["Gone with the Wind", 3], ["Love Actually", 4], ["Midnight in Paris", 5]];
// for (let movie of movies){
//     let result = movie.filter((n) => typeof(n) == 'string')
//     console.log(result);
// }

//STEP 14
//Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window
// let employees=[];
// employees.push('ZAK');
// employees.push('JESSICA');
// employees.push('MARK');
// employees.push('FRED');
// employees.push('SALLY');
// const showEmployee = function (arrToShow) { 
//     console.log("\nEmployees:\n");
//     arrToShow.forEach(element => {
//         console.log(element);
//     });
//     console.log("\n");
// }; 

// showEmployee(employees); 


//STEP 15
//Write a JavaScript function to filter false, null, 0 and blank values from an array.
// function filterValues(arrToFilter){
//     return arrToFilter.filter(i => !!i);
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
//Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
// function randomElement(arrayToWork){
//     let elementReturn = Math.floor(Math.random() * arrayToWork.length);
//     return arrayToWork[elementReturn];
// }

// console.log(randomElement([77, 88, 75, 17, 95, 85, 99, 100, 60, 68]));


//STEP 17
//Write a JavaScript function to get the largest number from a numeric array.
// function largestElement(arrayToWork){
//     let sortedArr= arrayToWork.sort();
//     return sortedArr[0];
// }

// console.log(largestElement([77, 88, 75, 17, 95, 85, 99, 100, 60, 68]));