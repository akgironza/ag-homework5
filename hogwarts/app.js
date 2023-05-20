/* TESTING
if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};
*/

$(() => {
	// put jQuery in here
});

// Year 1
const $body = $("body")
const $container = $("<div>")
$container.attr('id', 'container')
//console.log($container)

const $h1 = $("<h1>")
$h1.text('Hogwarts')
$($body).append($container)
$($container).append($h1)
// console.log($h1)






