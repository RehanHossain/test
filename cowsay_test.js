var cowsay = require("cowsay");
var oneLinerJoke = require("one-liner-joke");

var joke1 = oneLinerJoke.getRandomJoke({
  exclude_tags: ["adult", "racist", "indian"],
});

// console.log(joke1);

console.log(
  cowsay.say({
    // text: "I'm a moooodule",
    text: joke1.body,
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()
