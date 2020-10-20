/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });




  let button1 = document.querySelector("#buttton");



button1.addEventListener('click', event =>{
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclub/videos.html");
});


button1.addEventListener('hover', event =>{
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclubwebsite/videos.html");
});


// Create a reference with an initial file path and name



var pathReference = storage.ref('intro.mp4').getDownloadURL()

