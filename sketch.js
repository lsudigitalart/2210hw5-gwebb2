var s = 1;
var r = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;
var rt = 406;
var rty = 0;
var erttwo = 0;
var ertytwo = 401;
var rrttwo = 402;
var rrtytwo = 401;


function setup() {
  createCanvas(750, 750);
  background(130, 100, 75);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

function draw() {
//translate(width/2, height/2);
push();
stroke(255);
strokeWeight(10);
line(375, 0, 375, 750);
line(0, 375, 750, 375);
pop();


push();
translate(t, ty);
fill(0, 150, 200);
stroke(0, 150, 200);
ellipse(0, ry, 10, 10);

if(t > 349) {
  bDir = 0;
  //ry = random(0, height/10);
  ty = random(0, 349);
  //constrain(ty, 0, 349);
}

if(t < -25) {
  bDir = 1;
  ty > 0;
  //ry = random(0, height/10);
  ty = random(0, 349);
  //constrain(ty, 0, 349);

}

if(bDir == 1) {
  t++;
} else {
  t--;
}
pop();


push();
translate(rt, rty);
rotate(r);
r = r + 0.1;
fill(0, 230, 90);
stroke(0, 230, 90);
rect(0, ry, 10, 10);

if(rt > 750) {
  bDir = 0;
  //ry = random(0, height/10);
  rty = random(0, 349);
  //constrain(ty, 0, 349);
}

if(rt < 406) {
  bDir = 1;
  //ry = random(0, height/10);
  ty = random(0, 349);
  //constrain(ty, 0, 349);

}

if(bDir == 1) {
  rt++;
} else {
  rt--;
}
pop();


push();
translate(erttwo, ertytwo);
scale(s);
fill(130, 110, 200);
stroke(130, 110, 200);
ellipse(0, ry, 10, 10);

if(erttwo > 349) {
  bDir = 0;
  //ry = random(0, height/10);
  ertytwo = random(401, 750);
  //constrain(ty, 0, 349);
  s = random(0, 1);
}

if(erttwo < 0) {
  bDir = 1;
  //ry = random(0, height/10);
  ertytwo = random(401, 750);
  //constrain(ty, 0, 349);
s = random(0, 1);
}

if(bDir == 1) {
  erttwo++;
} else {
  erttwo--;
}
pop();


push();
translate(rrttwo, rrtytwo);
rotate(r);
r = r + 0.1;
scale(s);
fill(255, 90, 145);
stroke(255, 90, 145);
rect(0, ry, 10, 10);

if(rrttwo > 750) {
  bDir = 0;
  //ry = random(0, height/10);
  rrtytwo = random(401, 750);
  //constrain(ty, 0, 349);
  s = random(0, 1);
}

if(rrttwo < 402) {
  bDir = 1;
  //ry = random(0, height/10);
  rrtytwo = random(401, 750);
  //constrain(ty, 0, 349);
s = random(0, 1);
}

if(bDir == 1) {
  rrttwo++;
} else {
  rrttwo--;
}
pop();




println(t);
}
