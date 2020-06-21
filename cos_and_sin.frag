precision highp float;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
void main() {
  float c = cos(time);
  float s = sin(time);
  vec2 modulo = mod(gl_FragCoord.yz, 100.0);
  gl_FragColor = vec4(s, modulo.y / 100.0, modulo.x / 50.0,  modulo.x / 2.0);
}