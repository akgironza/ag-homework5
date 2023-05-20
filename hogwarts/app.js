/* TESTING
if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};
*/

$(() => {
	// put jQuery in here
});

// YEAR 1
const $body = $("body")
const $container = $("<div>")
$container.attr('id', 'container')
//console.log($container)

const $h1 = $("<h1>")
$h1.text('Hogwarts')
$($body).append($container)
$($container).append($h1)
// console.log($h1)


// YEAR 2
const $h2 = $("<h2>")
const $h3 = $("<h3>")
const $h4_1 = $("<h4>")
const $h4_2 = $("<h4>")
$h2.text('Arielle')
$h3.text('Ravenclaw')
$h4_1.text('Zoe').attr('class', 'cat')
$h4_2.text('Holly Wand with Unicorn Hair Core')
$($container).append($h2).append($h3).append($h4_1).append($h4_2)

// console.log($h2)
// console.log($h3)
// console.log($h4)

// YEAR 3

const $ul = $("<ul>").attr('storage', 'trunk')
$($ul).append($("<li>").text("butter beer"))
$($ul).append($("<li>").text("invisibility cloak").attr('class', 'secret'))
$($ul).append($("<li>").text("magic map").attr('class', 'secret'))
$($ul).append($("<li>").text("time turner").attr('class', 'secret'))
$($ul).append($("<li>").text("leash").attr('class', 'cat'))
$($ul).append($("<li>").text("Bertie Bott's Every Flavor Beans"))

$($container).append($ul)

console.log($ul)

// YEAR 4
// const $h5 = $("<h5>").text("Spring 2017")
// coming back to this if I have time bc I started my homework late again

// YEAR 5
$($h4_2).remove()
const $h4_3 = $("<h4>").text('Holly Wand with Unicorn Hair Core but different from the broken one')
$($container).append($h4_3)
$($container).append($ul)
$h4_3.css("color", "indigo")
// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
// Have your pet come back (remove your pet from the DOM, put it back in its original location)
// will come back to this if I have time, sounds funny

// YEAR 6

// YEAR 7
