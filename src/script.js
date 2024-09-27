import * as THREE from "https://esm.sh/three";
//import { OrbitControls } from "https://esm.sh/three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);

//const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0, 20);
//orbit.update();

const earthGeometry = new THREE.SphereGeometry(8, 64, 32);
const earthMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: true
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.set(0, 0, 0);
earth.castShadow = true;

const moonGeometry = new THREE.SphereGeometry(2, 64, 32);
const moonMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
moon.position.set(10, 8, 0);
moon.castShadow = true;

//const planeGeometry = new THREE.PlaneGeometry(30, 30);
//const planeMaterial = new THREE.MeshStandardMaterial({
//  color: 0x808080,
//  side: THREE.DoubleSide
//});
//const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//scene.add(plane);
//plane.rotation.x = -0.5 * Math.PI;
//plane.receiveShadow = true;

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 10, 15);
directionalLight.castShadow = true;

//const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
//scene.add(dLightHelper);

//const gridHelper = new THREE.GridHelper(30);
//scene.add(gridHelper);

function animate() {
  earth.rotation.y += 0.01;

  moon.rotation.y += 0.02;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
