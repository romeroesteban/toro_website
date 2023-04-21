let easycam;

let DIM = 80;
let mandelbulb = [];

function setup() {
  colorMode(HSB, 1, 1, 1);
  pixelDensity(1);

  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes("antialias", true);

  //console.log(Dw.EasyCam.INFO);

  easycam = new Dw.EasyCam(this._renderer, { distance: 1000 });

  strokeWeight(1.8);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  easycam.setViewport([0, 0, windowWidth, windowHeight]);
}

function removeMouseWheelListener(){
  var cam = this.cam;
  var mouse = cam.mouse;
  cam.detachListener(mouse.wheel );
}

function draw() {
  cursor('grab');
  if(mouseIsPressed){
     cursor('grabbing');
  }
  
  background(0,0,0.07);
  
  rotateX(0.24*PI);
  rotateY(0.24*PI);
  
  for (theta = 0; theta < 20*Math.PI; theta++) {
    for (phi = 0; phi < 20*Math.PI; phi++) {   
  
      let i = (2+Math.cos(theta))*Math.cos(phi);
      let j = (2+Math.cos(theta))*Math.sin(phi);
      let k = Math.sin(theta);
      
      let x = map (i, -1, 1, -100, 100);
      let y = map (j, -1, 1, -100, 100);
      let z = map (k, -1, 1, -100, 100);
      
      stroke(255);
      point(x,y,z);
      }
    }
}
