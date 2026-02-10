varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vViewPosition;

uniform float uTime;
uniform vec3 uColor;
uniform float uRimPower;
uniform float uRimIntensity;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Fresnel/Rim effect
  float fresnel = 1.0 - dot(normal, viewDir);
  fresnel = pow(fresnel, uRimPower);
  
  // Scanlines
  float scanline = sin(vPosition.y * 50.0 - uTime * 2.0) * 0.1 + 0.9;
  
  // Combine
  vec3 finalColor = uColor * fresnel * uRimIntensity * scanline;
  
  // Add a bit of base opacity
  float alpha = fresnel * 0.8 + 0.1;
  
  gl_FragColor = vec4(finalColor, alpha);
}
