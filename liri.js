//Read and set any environment variables with .env package.
require("dotenv").config();

//Require data from File Systems npm package
var fs = require("fs");

//Requiring our Spotify function from spotify.js
var mySpotify = require("./spotify.js");
//Requiring our Movies function exported from omdb.js
var myMovies = require('./movies.js');
//Requiring our Movies function exported from omdb.js
var myConcert = require("./concerts.js");

//creates initial user command
var userCommand=process.argv[2];
//creates user input.
var userInput=process.argv.splice(3, process.argv.length).join('');

//program conditions

switch (userCommand) { // setting up a switch case that goes through eash :"scenario commands that are allowed"
    case "Concert-this": 
        myConcert()
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        reset();
        break;
        default:
        console.log("Please specify favorite artist's Concert or song, or movie. ");

};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        //Return error if error occurs.
        if (error) {
            return console.log(error);
        }
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
        
        // Each command is represented. Because of the format in the txt file, remove the quotes to run these commands. 
        if (dataArr[0] === "spotify-this-song") {
            var songcheck = dataArr[1].slice(1, -1);
            console.log("Song Check: "+songcheck)
            mySpotify(songcheck);
        } else if (dataArr[0] === "concert-this") {
            var venueName = dataArr[1].slice(1, -1);
            console.log("Venue Name: "+venueName)
            myConcert(venueName);
        } else if(dataArr[0] === "movie-this") {
            var movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            myMovies(movieName);
        }
    });
};






















