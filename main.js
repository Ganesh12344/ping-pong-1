
  function setup(){
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();
  
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  