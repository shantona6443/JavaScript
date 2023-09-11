

//  // Set the date we're counting down to
// var countDownDate = new Date("Jan 6, 2023").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("day").innerHTML = days;
//   document.getElementById("our").innerHTML = hours;
//   document.getElementById("min").innerHTML = minutes;
//   document.getElementById("sec").innerHTML = seconds;

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY TO YOU";
//   }
// }, 1000);

var typed = new Typed('.element', {
  strings: [
    '',
    'Happy birthday!',
    'May everyones moments be filled with joy and happiness',
    'on this special day...',
    'May Allah bless you with good health.',
    'HAPPY',
    'BIRTHDAY 🥰....',
    'VAIYA❣️',
    
  ],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  });