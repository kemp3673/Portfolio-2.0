const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const controls = new OrbitControls(camera, renderer.domElement);

  // const axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  // (X, Y, Z)
  camera.position.set(0, 2, 5);
  controls.update();

  const laptopModel = new URL('../../../static/laptop.glb', import.meta.url);
  const loader = new GLTFLoader();
  loader.load(laptopModel.href, (gltf) => {
    const model = gltf.scene;
    scene.add(model);
  }, undefined, (error) => {
    console.error(error);
  });


  // const planeGeometry = new THREE.PlaneGeometry(30, 30);
  // const planeMaterial = new THREE.MeshLambertMaterial({
  //   color: 0xffffff,
  //   side: THREE.DoubleSide,
  // });
  // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // scene.add(plane);
  // plane.rotation.x = -Math.PI / 2;
  // plane.receiveShadow = true;

  // const gridHelper = new THREE.GridHelper(30);
  // scene.add(gridHelper);

  // const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
  // const sphereMaterial = new THREE.MeshStandardMaterial({
  //   color: 0x7777ff,
  //   wireframe: false,
  // });
  // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  // scene.add(sphere);
  // sphere.position.set(-10, 10, 0);
  // sphere.castShadow = true;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);
  directionalLight.position.set(-30, 50, 0);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.bottom = -10;

  const spotLight = new THREE.SpotLight(0xffffff, 1);
  scene.add(spotLight);
  spotLight.position.set(0, 20, 100);
  spotLight.castShadow = true;
  spotLight.angel = 0.2;

  // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
  // scene.add(dLightHelper);

  // const sLightHelper = new THREE.SpotLightHelper(spotLight);
  // scene.add(sLightHelper);

  // const gui = new dat.GUI();
  // gui.add(sphere.position, "x", -10, 10);
  // gui.add(sphere.position, "y", -10, 10);
  // gui.add(sphere.position, "z", -10, 10);



  // const options = {
  //   sphereColor: 0x7777ff,
  // };

  // gui.addColor(options, "sphereColor").onChange(() => {
  //   sphereMaterial.color.set(options.sphereColor);
  // });

  function animate(time) {
    // model.rotation.x = time / 1000;
    // model.rotation.y = time / 1000;
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // return (
  //   <div className="laptopModel">
  //     <canvas id="canvas"></canvas>
  //   </div>
  // );