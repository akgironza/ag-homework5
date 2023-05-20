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




