precision highp float;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
void main() {
  // , ,
  gl_FragColor = vec4(cos(time), (mouse.x / resolution.x)*255., (mouse.y / resolution.y)*255.,  mouse.x / sin(time));

}