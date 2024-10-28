import * as THREE from "https://esm.sh/three";

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

// Debugging: log a message when texture is loaded
const loadTexture = (url) => {
  return textureLoader.load(
    url,
    () => console.log(`Loaded texture: ${url}`),
    undefined,
    (err) => console.error(`Error loading texture: ${url}`, err)
  );
};

// Texture loader
const textureLoader = new THREE.TextureLoader();

// Background texture (space background)
const spaceTexture = textureLoader.load("imgs/8k_stars_milky_way.jpg");
scene.background = spaceTexture;

// Planet Textures
const mercuryTexture = textureLoader.load("2k_mercury.jpg");
const venusTexture = textureLoader.load("2k_venus_surface.jpg");
const earthTexture = textureLoader.load("2k_earth_daymap.jpg");
const marsTexture = textureLoader.load("2k_mars.jpg");
const jupiterTexture = textureLoader.load("2k_jupiter.jpg");
const saturnTexture = textureLoader.load("2k_saturn.jpg");
const uranusTexture = textureLoader.load("2k_uranus.jpg");
const neptuneTexture = textureLoader.load("2k_neptune.jpg");
const plutoTexture = textureLoader.load("path_to_pluto_texture.jpg");

camera.position.set(100, 0, 20);

// Sun
const sunGeometry = new THREE.SphereGeometry(8, 64, 32);
const sunMaterial = new THREE.MeshStandardMaterial({
  color: 0xFFFF00,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
sun.position.set(-50, 0, 0);
sun.castShadow = true;

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(8, 64, 32);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture, // Apply the texture here
  wireframe: true,
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercury);
mercury.position.set(0, 0, 0);
mercury.castShadow = true;

// Venus
const venusGeometry = new THREE.SphereGeometry(8, 64, 32);
const venusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffff00,
  wireframe: true,
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venus);
venus.position.set(50, 0, 0);
venus.castShadow = true;

// Earth and Moon
const earthGeometry = new THREE.SphereGeometry(8, 64, 32);
const earthMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.set(100, 0, 0);
earth.castShadow = true;

const moonGeometry = new THREE.SphereGeometry(2, 64, 32);
const moonMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true,
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
moon.position.set(110, 8, 0);
moon.castShadow = true;

const marsGeometry = new THREE.SphereGeometry(8, 64, 32);
const marsMaterial = new THREE.MeshStandardMaterial({
  color: 0xff4500,
  wireframe: true,
});
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.set(150, 0, 0);
mars.castShadow = true;

const jupiterGeometry = new THREE.SphereGeometry(8, 64, 32);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b0000,
  wireframe: true,
});
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.set(200, 0, 0);
jupiter.castShadow = true;

const saturnGeometry = new THREE.SphereGeometry(8, 64, 32);
const saturnMaterial = new THREE.MeshStandardMaterial({
  color: 0xfffff0,
  wireframe: true,
});
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
saturn.position.set(250, 0, 0);
saturn.castShadow = true;

const uranusGeometry = new THREE.SphereGeometry(8, 64, 32);
const uranusMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ffff,
  wireframe: true,
});
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
uranus.position.set(300, 0, 0);
uranus.castShadow = true;

const neptuneGeometry = new THREE.SphereGeometry(8, 64, 32);
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture, // Apply the texture here
});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
neptune.position.set(350, 0, 0);
neptune.castShadow = true;

const plutoGeometry = new THREE.SphereGeometry(8, 64, 32);
const plutoMaterial = new THREE.MeshStandardMaterial({
  color: 0x8b4513,
  wireframe: true,
});
const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(pluto);
pluto.position.set(400, 0, 0);
pluto.castShadow = true;

const blackholeGeometry = new THREE.SphereGeometry(8, 64, 32);
const blackholeMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  wireframe: true,
});
const blackhole = new THREE.Mesh(blackholeGeometry, blackholeMaterial);
scene.add(blackhole);
blackhole.position.set(500, 0, 0);
blackhole.castShadow = true;

const bhr1Geometry = new THREE.RingGeometry(12.5, 5, 32);
const bhr1Material = new THREE.MeshBasicMaterial({
  color: 0xEEDD82,
  side: THREE.DoubleSide,
});
const bhr1 = new THREE.Mesh(bhr1Geometry, bhr1Material);
scene.add(bhr1);
bhr1.position.set(500, 0, 0);

const bhr2Geometry = new THREE.RingGeometry(12.5, 5, 32);
const bhr2Material = new THREE.MeshBasicMaterial({
  color: 0xEEDD82,
  side: THREE.DoubleSide,
});
const bhr2 = new THREE.Mesh(bhr2Geometry, bhr2Material);
scene.add(bhr2);
bhr2.position.set(500, 0, 0);
bhr2.rotation.x = -0.4 * Math.PI;

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 10, 15);
directionalLight.castShadow = true;

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

  bhr1.rotation.z += 0.1;

  bhr2.rotation.z += 0.1;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// end three.js

const planets = [
  {
    name: `Sun`,
    description: `The Sun is the star at the center of our solar system. It is a nearly perfect sphere of hot plasma and provides the energy that supports life on Earth. 
                  The Sun's gravity holds the solar system together, and its energy drives climate and weather on our planet.`,
    color: 0xffff00,
    cpos: (-50, 0, 20),
  },
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
  const $leftPanel = $('<div class="contentPanel"><h1></h1><h4></h4></div>'); // Replaces col-3
  const $centerPanel = $("<div></div>"); // Replaces col-6

  // Create a separate container for the button panel
  const $buttonContainer = $('<div class="button-container"></div>');
  const $buttonPanel = $(
    '<div class="text-center buttonPanel"><h1>Milky Way</h1><hr></div>'
  );

  // Append the button panel to the button container
  $buttonContainer.append($buttonPanel);

  // Append all panels to the main container
  $container.append($leftPanel, $centerPanel, $buttonContainer);

  // Add the container to the DOM
  $("#info").append($container);


  // Create buttons
  const buttonNames = [
    "Sun",
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
      `<button class="btnstyling pulse" id="btn${name}">${name}</button>`
    );
    $button.on("click", function () {
      updateInfo(index); // Update info based on button clicked
      if (index === 0) {
        camera.position.set(-50, 0, 20); // Sun
      } else if (index === 1) {
        camera.position.set(0, 0, 20); // Mercury
      } else if (index === 2) {
        camera.position.set(50, 0, 20); // Venus
      } else if (index === 3) {
        camera.position.set(100, 0, 20); // Earth
      } else if (index === 4) {
        camera.position.set(150, 0, 20); // Mars
      } else if (index === 5) {
        camera.position.set(200, 0, 20); // Jupiter
      } else if (index === 6) {
        camera.position.set(250, 0, 20); // Saturn
      } else if (index === 7) {
        camera.position.set(300, 0, 20); // Uranus
      } else if (index === 8) {
        camera.position.set(350, 0, 20); // Neptune
      } else if (index === 9) {
        camera.position.set(400, 0, 20); // Pluto
      }
    });
    $buttonPanel.append($button).append("<br>");
  });

  // Function to update the displayed planet info
  function updateInfo(planetIndex) {
    const planet = planets[planetIndex];
    $leftPanel.find("h1").html(planet.name);
    $leftPanel.find("h4").html(planet.description);
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
        updateInfo(10);
      }
    } else {
      current = 0;
    }
  });
});
