precision highp float;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
void main() {

  float s = time;
  vec2 modulo = gl_FragCoord.xy;
  for (float i = -50.; i<= 100.; i++) {
    if (s < 1.5 || i  <= 10./s) {
      continue;
    }
    if (mod(modulo.y, 10.) >= 0. && mod(modulo.y, 10.) <= 8.) {
      continue;
    }
    if (modulo.y  >= (s/i) && modulo.y <= (500./i) && modulo.x <= s*100. && modulo.x >= s*95.) {
      gl_FragColor = vec4(0., sqrt(s), s*0.5,  0.0);
    }
  }
  
}