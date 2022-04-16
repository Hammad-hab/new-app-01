const HeightMapShaders = {
    vertexShader: /* glsl */ `
    uniform float time;
    varying vec2 vUv;
    void main () {
        vec3 newposition = position;
        float dist = distance(uv, vec2(0.5));
            float VariA = cos(dist*1000. + time);
            float VariB = sin(dist*1000. + time);
            float VariC = tan(dist*1000. + time);
            float Noise = VariA + VariB;
            newposition.y +=  Noise;
            vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0 );
    }
    `,
    fragmentShader: /* glsl */ `
    varying vec2 vUv;
    void main (){
      gl_FragColor = vec4(vUv,0,1);
    }
    `
}


module.exports = {
    HeightMapShaders
}