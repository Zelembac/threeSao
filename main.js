// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import TWEEN from "three/addons/libs/tween.module.js";
// import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
// import { GUI } from "three/addons/libs/lil-gui.module.min.js";

// import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
// import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
// import { SAOPass } from "three/addons/postprocessing/SAOPass.js";
// import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// function main() {
//   const canvas = document.querySelector("#c");
//   const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
//   renderer.setClearColor("#1e4fd6");

//   const fov = 40;
//   const aspect = 2; // the canvas default
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(20, 15, 5);

//   const scene = new THREE.Scene();

//   // create a global audio source

//   {
//     const color = 0xffffff;
//     const intensity = 10;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(-1, 5, 1);
//     scene.add(light);
//   }
//   {
//     const color1 = 0xffffff;
//     const intensity1 = 1;
//     const light1 = new THREE.AmbientLight(color1, intensity1);
//     scene.add(light1);
//   }

//   const controls = new OrbitControls(camera, canvas);
//   controls.target.set(0, 0, 0);
//   controls.update();

//   {
//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
//     dracoLoader.setDecoderConfig({ type: "js" });

//     // Optional: Pre-fetch Draco WASM/JS module.

//     const gltfLoader = new GLTFLoader();
//     gltfLoader.setDRACOLoader(dracoLoader);

//     gltfLoader.load("10461022_EDD_FD72_TMC_Tundra.glb", (gltf) => {
//       let root = gltf.scene;
//       scene.add(root);
//       root.scale.x = 50;
//       root.scale.y = 50;
//       root.scale.z = 50;
//       root.position.y = 0;
//       root.position.x = 0;
//       console.log(root);
//       gltf.scene.traverse((child) => {
//         if (child.material) child.material.metalness = 0;
//       });
//     });
//   }

//   let composer = new EffectComposer(renderer);
//   let renderPass = new RenderPass(scene, camera);
//   composer.addPass(renderPass);
//   let saoPass = new SAOPass(scene, camera);
//   composer.addPass(saoPass);
//   const outputPass = new OutputPass();
//   composer.addPass(outputPass);

//   // Init gui
//   const gui = new GUI();
//   gui
//     .add(saoPass.params, "output", {
//       Default: SAOPass.OUTPUT.Default,
//       "SAO Only": SAOPass.OUTPUT.SAO,
//       Normal: SAOPass.OUTPUT.Normal,
//     })
//     .onChange(function (value) {
//       saoPass.params.output = value;
//     });
//   gui.add(saoPass.params, "saoBias", -1, 1);
//   gui.add(saoPass.params, "saoIntensity", 0, 1);
//   gui.add(saoPass.params, "saoScale", 0, 10);
//   gui.add(saoPass.params, "saoKernelRadius", 1, 100);
//   gui.add(saoPass.params, "saoMinResolution", 0, 1);
//   gui.add(saoPass.params, "saoBlur");
//   gui.add(saoPass.params, "saoBlurRadius", 0, 200);
//   gui.add(saoPass.params, "saoBlurStdDev", 0.5, 150);
//   gui.add(saoPass.params, "saoBlurDepthCutoff", 0.0, 0.1);
//   gui.add(saoPass, "enabled");

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render() {
//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
//   }

//   requestAnimationFrame(render);
// }

// main();

// // import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// function main1() {
//   const canvas = document.querySelector("#c");
//   const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

//   const fov = 40;
//   const aspect = 2; // the canvas default
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(0, 50, 0);
//   camera.up.set(0, 0, 1);
//   camera.lookAt(0, 0, 0);

//   const scene = new THREE.Scene();

//   {
//     const color = 0xffffff;
//     const intensity = 3;
//     const light = new THREE.PointLight(color, intensity);
//     scene.add(light);
//   }

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   function render(time) {
//     time *= 0.001;

//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
//   }

//   requestAnimationFrame(render);
// }

import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { SAOPass } from "three/addons/postprocessing/SAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

let container, stats;
let camera, scene, renderer;
let composer, renderPass, saoPass;
let group;

init();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setAnimationLoop(animate);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(65, width / height, 3, 100);
  camera.position.z = 7;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  scene = new THREE.Scene();

  const light = new THREE.PointLight(0xefffef, 500);
  light.position.z = 10;
  light.position.y = -10;
  light.position.x = -10;
  scene.add(light);

  const light2 = new THREE.PointLight(0xffefef, 500);
  light2.position.z = 10;
  light2.position.x = -10;
  light2.position.y = 10;
  scene.add(light2);

  const light3 = new THREE.PointLight(0xefefff, 500);
  light3.position.z = 10;
  light3.position.x = 10;
  light3.position.y = -10;
  scene.add(light3);

  const light4 = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(light4);

  {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    dracoLoader.setDecoderConfig({ type: "js" });

    // Optional: Pre-fetch Draco WASM/JS module.

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load("enigma_machine.glb", (gltf) => {
      let root = gltf.scene;
      scene.add(root);
      root.scale.x = 10;
      root.scale.y = 10;
      root.scale.z = 10;
      root.position.y = 0;
      root.position.x = 0;
      console.log(root);
      // gltf.scene.traverse((child) => {
      //   if (child.material) child.material.metalness = 0;
      // });
    });
  }

  stats = new Stats();
  container.appendChild(stats.dom);

  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  saoPass = new SAOPass(scene, camera);
  composer.addPass(saoPass);
  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // Init gui
  const gui = new GUI();
  gui
    .add(saoPass.params, "output", {
      Default: SAOPass.OUTPUT.Default,
      "SAO Only": SAOPass.OUTPUT.SAO,
      Normal: SAOPass.OUTPUT.Normal,
    })
    .onChange(function (value) {
      saoPass.params.output = value;
    });
  gui.add(saoPass.params, "saoBias", -1, 1);
  gui.add(saoPass.params, "saoIntensity", 0, 1);
  gui.add(saoPass.params, "saoScale", 0, 10);
  gui.add(saoPass.params, "saoKernelRadius", 1, 100);
  gui.add(saoPass.params, "saoMinResolution", 0, 1);
  gui.add(saoPass.params, "saoBlur");
  gui.add(saoPass.params, "saoBlurRadius", 0, 200);
  gui.add(saoPass.params, "saoBlurStdDev", 0.5, 150);
  gui.add(saoPass.params, "saoBlurDepthCutoff", 0.0, 0.1);
  gui.add(saoPass, "enabled");

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  const width = window.innerWidth || 1;
  const height = window.innerHeight || 1;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);

  composer.setSize(width, height);
}

function animate() {
  stats.begin();
  render();
  stats.end();
}

function render() {
  const timer = performance.now();

  composer.render();
}
