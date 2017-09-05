var frameRate = 1000/10;
var frame = 0;
var assets=[
  'assets/characters/sauske/run/slice_1_0.png',
  'assets/characters/sauske/run/slice_1_1.png',
  'assets/characters/sauske/run/slice_1_2.png',
  'assets/characters/sauske/run/slice_1_3.png',
  'assets/characters/sauske/run/slice_1_4.png'
];

var frames = [];
//ffffsssXX
setup = function(){
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  img = new Image();
  img.onload = onImageLoad;
  img.src="assets/naruto-punch.png";

  for (var i =0; i < assets.length; i++){
    frames.push(new Image());
    frames[i].onload = onImageLoad;
    frames[i].src = assets[i];
  }
}

function run(){
  setInterval(animate, frameRate);
}

var animate = function(){
  context.clearRect(0,0, canvas.width, canvas.height);
  context.drawImage(frames[frame], 192, 192);
  frame = (frame +1 ) % frames.length;
}
onImageLoad = function(){ 
  console.log("image loaded.");
}

setup();