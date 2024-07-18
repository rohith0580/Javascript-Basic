// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

// --------------------------------------

var question1;
var question2;
var question3
question1 = {
    question : "What does the acronym \"HTTP\" stand for?",
    anwser : " Hypertext Transfer Protocol"
};
question2 = {
    question : "What is the largest social media platform by user count?",
    anwser : "Elon Musk"
};
question3 = {
    question : "Who is the CEO of Tesla Inc.?",
    anwser : "Facebook"
};
function multipleQA (){
    console.log("Multiple choice question");
    console.log("Question 1 : " + question1.question);
    console.log("answer : " + question1.anwser);
    console.log("\n");
    console.log("Question 2 : " + question2.question);
    console.log("answer : " + question2.anwser);
    console.log("\n");
    console.log("Question 3 : " + question3.question);
    console.log("answer : " + question3.anwser);
}

multipleQA();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */