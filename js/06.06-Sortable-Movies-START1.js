// Lesson 06.06 - START
// warm up convert movie name to file name:
// let movieNames = ["2001: A Space Odyssey",
//                     'The Wolf of Wall Street',
//                     "Look Who's Talking",
//                     "The Godfather, Part II", 
//                     "E.T. The Extra-Terrestrial"];
// write a function that takes in aa movie name and returns a file name if the movie name is "2001: A Space Odyssey",file name is "2001: A Space Odyssey"
// const fileNameArr = []
// function generateMovieFileName(movie){
    
    // for (let j = 0; j < movieNames.length; j++){
    //     let movieName = movieNames[j]
    //     movieNames = movieName.replaceAll(" ","-")//space =>'-'
    //     movieNames = movieName.replaceAll("'","")//Look Who's
    //     movieNames = movieName.replaceAll(":","");//2001:
    //     movieNames = movieName.replaceAll(",","")//GodF, PartII
//         movieNames = movieName.replaceAll(".","");//E.T.
//         fileNameArr.push(movieNames.toLowerCase()+ ".jpg")
//     }
    
//     return fileNameArr;
// }
// const fileNames = console.log(generateMovieFileName(movieNames));
// expected output:
//[ "2001-a-space-odyssey.jpg",'the-wolf-of-wall-street.jpg',"look-whos-talking.jpg"]



// 7. Start by getting the **movie-holder** div, for displaying the movies:
const movieHolder = document.querySelector('.movie-holder')

// 7B. Get the checkbox
const descCB = document.getElementById('cb')
//on check/uncheck (change event)reverse order of sort and call renderMovies
descCB.addEventListener('change',function(){
    movies.reverse();
    renderMovies();
});


// 7C.make the select menu and have it call sortMovies func
const selectMenu = document.querySelector('select');
selectMenu.addEventListener('change',sortMovies)
// 7D. populate the select menu w dynamically generated option tags:
// make an array of movie obj keys, and then iterate over the array
// ['duration','director','genre', 'name','oscars','year','tomatometer]
// save the movie obj kays to an array; all obj have same keys,
// so use any of the movie array's objects as the object
const movieKeys = Object.keys(movies[0])
console.log('array movie object keys:',movieKeys)
for(let i = 0; i < movieKeys.length; i++){
    let key = movieKeys[i]
    if(key != "genres" && key != 'director'){
    // make an option for that key and add it to select menu
    const optn = document.createElement('option');
    // give the <option> its required value and text:
    optn.value = key;//leave value lowercase to match dataset
    // capitalize to look nice for user: "Duration"  
    optn.text = key[0].toUpperCase() + key.slice(1);
    if(key == 'name')optn.selected = 'selected';
    selectMenu.appendChild(optn);//add option to select menu
    }
}

// 8. Loop movies

    for(let i = 0;i < movies.length;i++){
// 9. Inside the loop, start by simplifying the current movie object:
        const movie = movies[i];

        // hm:'2h 55m' in addition to duration:175
        let hrs = Math.floor(movie.duration/60);//2.916=>2
        let mins = movie.duration % 60;
        movie.hm = `${hrs}h ${mins}m`; 

        // fileName:"the-godfather.jpg" derived from "The Godfather"
        let movieName = movie.name;
        console.log(movie.name);
        movieName = movieName.replaceAll(" ","-")//space =>'-'
        movieName = movieName.replaceAll("'","")//Look Who's
        movieName = movieName.replaceAll(":","");//2001:
        movieName = movieName.replaceAll(",","")//GodF, PartII
        movieName = movieName.replaceAll(".","");//E.T.
        movie.fileName = movieName.toLowerCase()+ ".jpg";
        // noArticle
        let noArticle = movie.name.replace('The',"");
        noArticle = noArticle.replace('A',"");
        movie.noArticle = noArticle;
    }

    console.log(movies)
    

    // 10. Next, get the **mins** property, and simplifiy it as a variable:

    // 11. Get the **hours** by dividing **mins** by **60** and rounding down:

    // 12. Use modulo **%** to get the remainder minutes:

    // 13. Add a leading zero if **mins** is less than 10. This way, we get **2:03**, not **2:3**.

    // 14. Add a key, **hrMin**, to the object. The value is the **hours:mins** format:

    // Now, let's move on to adding the imgFile property:

    // 15. Still in the loop, get the name of the movie and make it lowercase:

    // Use replaceAll() to replace the spaces in the movie names with hyphens, since the image file names have hyphens instead of spaces between the words::

    // 17. Remove punctuation from the movie names by replacing commas, apostrophes, colons and periods with nothing.

    // 18. Complete the file name by tacking on '.jpg' at the end:

    // 19. Add the **imgFile** property to the object:

    // making a property with no leading articles

    // Now for the part where we make a property for the movie name, sans leading "A" or "The". This is the name that we will sort by.

    // 20. Still in the loop, get the movie's first two and first four characters:

    // 21. If the first two characters are "A ", make a new property **noAThe**, set equal to the full name, starting at the third character and going to the end: 

    // 22. Else if the first four characters are "The ", make a new property **noAThe**, set equal to the full name, starting at the fifth character and going to the end: 

    // 23. Else, the movie does not start with "A" or "The", so just set **noAThe** to equal the original name:

    // 24. Add one more line before closing the loop: a call to the **renderMovies()** function. This function runs on page load when the loop ends, and also whenever a choice is made to the **Sort by..** menu.
    
// end loop
    
// 25. Log the updated **movies** array. It should have all six properties: the original three: name, year and mins as well as the three new ones: hrMin, imgFile and noAThe:

// making the divs and images dynamically

// renderMovies() loops through the movies array and makes and outputs the grid of movies:

// 22. Define the **renderMovies()** function. First thing to do is clear the **movieHolder** of any existing content:
function renderMovies(){

    // clear the movie holder for a fresh render of a new sort order;
    movieHolder.innerHTML = "";

    // 27. Set up a loop to iterate the movies array and simplify the current movie by passing it to a variable:
    for(let i = 0; i < movies.length; i++){
        const movie = movies[i]
        // 28. Next in the loop, make a div, give it its class and output it to movieHolder:       
        const divvy = document.createElement('div');
        divvy.className = 'divvy';
        movieHolder.appendChild(divvy); 

        // 29. Still in the loop, make an image object, set its source to the movie's jpg and output it to the div:
        const poster = new Image();
        poster.src = `images/${movie.fileName}`
        divvy.appendChild(poster);

        // 30. Below the image, output the text info for the movie:
        divvy.innerHTML += movie.name + '<br>'; 
        divvy.innerHTML += movie.hm + '-' + movie.year + '<br>';
        divvy.innerHTML += `Osccars: ${movie.oscars.won}won,
                            ${movie.oscars.nominated}nominated<br>`;
        divvy.innerHTML += `Dirctor: ${movie.director}<br>`;
        divvy.innerHTML += `Tomatometer: ${movie.tomatometer}<br>`;
// 31. Close the loop, close the function and Reload the page. The grid of movies should be back, although the sort feature doesn't work yet. That's next.
    }// end loop

}// end renderMovies()

// call  renderMovie function as soon as the pais is ready
// the first sort will be lby the default name (a-z)
// the sortMovies func ends w a call to renderMovies
document.addEventListener('DOMContentLoaded', sortMovies);

// sorting movies

// 32. Get the select menu and have it call the **sortMovies** function:

// 33. Get the checkbox. When a change occurs (check/uncheck), run an inline function that reverses the order of the movies and calls the renderMovies() to refresh the display::

// 34. Define the sortMovies() function and get the menu choice, which is the sort key:
function sortMovies(){
    // 35.get the value of the select menu, this is the sort key:
    let key = selectMenu.value;
    

    if(key =='name') key == 'noArticle';
        
        //sort names by noArticle key so that the 'the' movie don't cluster at the end.
   
    // oscars is a child obj of {won:1, nom}
    // if(key == 'oscars') key = 'oscars.won';

    // 36. Sort according to the sort(callback) for obj key:
    // must use [] accessor since key is a variable; (a.key won't work)
    movies.sort(function(a,b){
        
            // return a[key].won < b[key].won ? 1 : -1
            // for oscars, sort on primary key won and secondary key nominated
            // that way {won:2 nominated:6} comes before {won:2 nominated:5}
            if(key == 'oscars'){//sort by oscars won, in descending order
                descCB.checked = 'checked';//or:boolean value of true
            return a[key].won < b[key].won? 1 : -1    
            }else if(key == 'tomatometer'){//sort by tomatometer, in descending order
                descCB.checked = true;//or
                return a[key] < b[key] ? 1 : -1;
            }else{
                descCB.checked = false;
                return a[key] > b[key] ? 1 : -1;
            }
    })

    // 38. Still inside sortMovies(), call the renderMovies() function and then end the sortMovies() function:
    renderMovies();

}// end sortMovies()

// 39. That should do it. Reload the page and put the application through its paces. The sort feature should be working. 

// NEXT: Lesson 06.06
// Next: Lesson 06.07