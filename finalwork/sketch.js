// 最終課題を制作しよう
function setup(){
  createCanvas(400, 400);
　a = 100; b = 200; c = 200; d = 100;
　e = 300; f = 200; g = 200; h = 300;
　va = 1.5; vb = -1.5; vc = 1.5; vd = 1.5;
　ve = -1.5; vf = 1.5; vg = -1.5; vh = -1.5;
}

function draw(){
  background(0);
  noStroke();
  fill(180, 255, 180);
    ellipse(a, b, 250);
    a += va;
    b += vb;
    if(a <= 100 || a >= 300){ va = -1 * va; }
    if(b <= 100 || b >= 300){ vb = -1 * vb; }

  fill(180, 255, 250);
    ellipse(c, d, 250);
    c += vc;
    d += vd;
    if(c <= 100 || c >= 300){ vc = -1 * vc; }
    if(d <= 100 || d >= 300){ vd = -1 * vd; }

  fill(255, 250, 180);
    ellipse(e, f, 250);
    e += ve;
    f += vf;
    if(e <= 100 || e >= 300){ ve = -1 * ve; }
    if(f <= 100 || f >= 300){ vf = -1 * vf; }

  fill(250, 180, 255);
    ellipse(g, h, 250);
    g += vg;
    h += vh;
    if(g <= 100 || g >= 300){ vg = -1 * vg; }
    if(h <= 100 || h >= 300){ vh = -1 * vh; }

　if(keyIsDown(" ".charCodeAt(0))){
  background(70, 240, 230);}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
