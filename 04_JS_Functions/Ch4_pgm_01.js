// Displaying an object's properties on the console

var movie1;
var movie2;
var blogpost;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Inside Out--2",
  actors: "Amy Poehler, Bill Hader--2",
  directors: "Pete Doctor, Ronaldo Del Carmen--2"
}

blogpost = {
  name : "Matt",
  blogname : "Mattrife"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Hello, I am " + blogpost.name + " and I am the creator of the blogpost " + blogpost.blogname);



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */