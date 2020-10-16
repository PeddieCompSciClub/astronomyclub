/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });


  let button1 = document.querySelector(".play");



button1.addEventListener('click', event =>{
  window.location.replace("https://peddiecompsciclub.github.io/astronomyclubwebsite/videos.html");
});

let db = firebase.database();

let database = db.ref();

console.log(database)


function updateDB(event){
  event.preventDefault();

  value = {
    video: vid,

  };
}
