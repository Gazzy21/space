import * as THREE from "https://esm.sh/three";

//import space from 'imgs/space.jpg';

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

//const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(100, 0, 20);
//orbit.update();

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(8, 64, 32);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  wireframe: false,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);
mercury.position.set(0, 0, 0);
mercury.castShadow = true;

// Venus
const venusGeometry = new THREE.SphereGeometry(8, 64, 32);
const venusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  wireframe: false,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);
venus.position.set(50, 0, 0);
venus.castShadow = true;

// Earth and Moon
const earthGeometry = new THREE.SphereGeometry(8, 64, 32);
const earthMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: false,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.set(100, 0, 0);
earth.castShadow = true;

const moonGeometry = new THREE.SphereGeometry(2, 64, 32);
const moonMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: false,
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
moon.position.set(110, 8, 0);
moon.castShadow = true;

const marsGeometry = new THREE.SphereGeometry(8, 64, 32);
const marsMaterial = new THREE.MeshStandardMaterial({
  color: 0xff4500,
  wireframe: false,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.set(150, 0, 0);
mars.castShadow = true;

const jupiterGeometry = new THREE.SphereGeometry(8, 64, 32);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b0000,
  wireframe: false,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.set(200, 0, 0);
jupiter.castShadow = true;

const saturnGeometry = new THREE.SphereGeometry(8, 64, 32);
const saturnMaterial = new THREE.MeshStandardMaterial({
  color: 0xfffff0,
  wireframe: false,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
saturn.position.set(250, 0, 0);
saturn.castShadow = true;

const uranusGeometry = new THREE.SphereGeometry(8, 64, 32);
const uranusMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ffff,
  wireframe: false,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
uranus.position.set(300, 0, 0);
uranus.castShadow = true;

const neptuneGeometry = new THREE.SphereGeometry(8, 64, 32);
const neptuneMaterial = new THREE.MeshStandardMaterial({
  color: 0x00008b,
  wireframe: false,
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
neptune.position.set(350, 0, 0);
neptune.castShadow = true;

const plutoGeometry = new THREE.SphereGeometry(8, 64, 32);
const plutoMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b4513,
  wireframe: false,
});
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(pluto);
pluto.position.set(400, 0, 0);
pluto.castShadow = true;

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 10, 15);
directionalLight.castShadow = true;

//const textureLoader = new THREE.TextureLoader();
//scene.background = textureLoader.load('imgs/space.jpg');

function animate() {
  mercury.rotation.y += 0.01;

  venus.rotation.y += 0.01;

  earth.rotation.y += 0.01;

  moon.rotation.y += 0.02;

  mars.rotation.y += 0.01;

  jupiter.rotation.y += 0.01;

  saturn.rotation.y += 0.01;

  uranus.rotation.y += 0.01;

  pluto.rotation.y += 0.02;



  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.inneHeight);
});

// end three.js

const planets = [
  {
    name: `Mercury`,
    description: `Mercury is the smallest planet in our solar system and the closest to the Sun. 
                It has a very thin atmosphere, which means it experiences extreme temperature changes.`,
    color: 0xff0000,
    cpos: (50, 0, 20),
  },
  {
    name: `Venus`,
    description: `Venus is the second planet from the Sun and is similar in size to Earth. 
                It has a thick atmosphere filled with carbon dioxide and is known for its intense heat and sulfuric acid clouds.`,
    color: 0xffff00,
    cpos: (100, 0, 20),
  },
  {
    name: `Earth`,
    description: `Earth, our vibrant blue planet, is the third rock from the Sun and
                the only known celestial body to support life. With diverse
                ecosystems ranging from lush forests and expansive oceans to arid
                deserts and icy tundras, Earth is a unique tapestry of
                interconnected environments. Its atmosphere, rich in oxygen and
                nitrogen, shields us from cosmic radiation while nurturing life. As
                we navigate the challenges of climate change and environmental
                degradation, our planet reminds us of the delicate balance that
                sustains all living things. Earth is not just our home; it’s a
                remarkable marvel of nature, deserving of our care and protection.`,
    color: 0x0000ff,
    cpos: (0, 0, 20),
  },
  {
    name: `Mars`,
    description: `Mars, known as the Red Planet, is the fourth planet from the Sun. 
                Its reddish appearance is due to iron oxide on its surface. Mars has the largest volcano and canyon in the solar system.`,
    color: 0xff4500,
  },
  {
    name: `Jupiter`,
    description: `Jupiter is the largest planet in our solar system and is known for its Great Red Spot, a giant storm. 
                It has a thick atmosphere and is a gas giant, with a strong magnetic field and dozens of moons.`,
    color: 0x8b0000,
  },
  {
    name: `Saturn`,
    description: `Saturn is known for its stunning rings made of ice and rock particles. 
                It is the second-largest planet and has many moons, including Titan, which is larger than Mercury.`,
    color: 0xfffff0,
  },
  {
    name: `Uranus`,
    description: `Uranus is an ice giant with a blue-green color due to methane in its atmosphere. 
                It rotates on its side, making its axial tilt unique among the planets.`,
    color: 0x00ffff,
  },
  {
    name: `Neptune`,
    description: `Neptune is the farthest planet from the Sun and is known for its deep blue color and strong winds. 
                It has a storm system similar to Jupiter’s and is classified as an ice giant.`,
    color: 0x00008b,
  },
  {
    name: `Pluto`,
    description: `Pluto is classified as a dwarf planet and is located in the Kuiper Belt. 
                It has a complex orbit and was reclassified from a planet to a dwarf planet in 2006.`,
    color: 0x8b4513,
  },
  {
    name: `Black Hole`,
    description: `A black hole is an astronomical object with a gravitational pull so strong that nothing, not even light, can escape from it. Formed from the collapse of massive stars, black holes warp space and time around them. They have an event horizon, a boundary beyond which nothing can return. Inside, gravity is infinitely strong, and the core, known as the singularity, defies our understanding of physics. Black holes come in different sizes, from stellar black holes a few times the mass of the Sun to supermassive black holes that sit at the centers of galaxies, including our Milky Way.`,
    color: 0x8b4513,
  },
];

$(document).ready(function () {
  const $container = $('<div class="container-fluid"></div>');
  const $row = $('<div class="row"></div>');
  const $col3 = $('<div class="col-3"></div>');
  const $col6 = $('<div class="col-6"></div>');
  const $col2 = $('<div class="col-2 text-center middle"><h1>Milky Way</h1><hr></div>');
  const $col1 = $('<div class="col-1"></div>');

  $row.append($col3, $col6, $col2, $col1);
  $container.append($row); // Append the row to the container

  // Add the container to the DOM
  $("#info").append($container);

  // Create buttons
  const buttonNames = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];
  buttonNames.forEach((name, index) => {
    const $button = $(
      `<button class="btnstyling" id="btn${name}">${name}</button>`
    );
    $button.on("click", function () {
      updateInfo(index); // Update info based on button clicked
      if (index === 0) {
        camera.position.set(0, 0, 20);
      } else if (index === 1) {
        camera.position.set(50, 0, 20);
      } else if (index === 2) {
        camera.position.set(100, 0, 20);
      } else if (index === 3) {
        camera.position.set(150, 0, 20);
      } else if (index === 4) {
        camera.position.set(200, 0, 20);
      } else if (index === 5) {
        camera.position.set(250, 0, 20);
      } else if (index === 6) {
        camera.position.set(300, 0, 20);
      } else if (index === 7) {
        camera.position.set(350, 0, 20);
      } else if (index === 8) {
        camera.position.set(400, 0, 20);
      }
    });
    $col2.append($button).append("<br>");
  });

  // Assemble the layout
  $row.append($col3, $col6, $col2, $col1);
  $("#info").append($row);

  // Function to update the displayed planet info
  function updateInfo(planetIndex) {
    const planet = planets[planetIndex];
    $col3.find("h1").html(planet.name);
    $col3.find("h4").html(planet.description);
  }

  const secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let current = 0;

  $(document).keydown(function (event) {
    if (event.key === secretCode[current]) {
      current++;
      if (current === secretCode.length) {
        current = 0;
        // Perform your desired action here
        alert("Secret code activated!");
        camera.position.set(500, 0, 20);
      }
    } else {
      current = 0;
    }
  });
});
