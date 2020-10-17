/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });




  let button1 = document.querySelector("#buttton");



button1.addEventListener('click', event =>{
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclubwebsite/videos.html");
});


button1.addEventListener('hover', event =>{
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclubwebsite/videos.html");
});


// Create a reference with an initial file path and name
let intro = document.querySelector(".bruh");




var pathReference = storage.ref('intro.mp4').getDownloadURL()

pathReference = pathReference

  intro.src = "https://firebasestorage.googleapis.com/v0/b/astronomyclub-e7efc.appspot.com/o/intro.mp4?alt=media&token=42182026-1d29-4dfc-89ff-4fc87ba0414b";

[]

console.log(pathReference);