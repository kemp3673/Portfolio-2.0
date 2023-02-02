import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ThreeScene extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene();

    /**** Renderer *****/
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#ffffff");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    /**** Camera *****/
    // PerspectiveCamera(fov : Number, aspect : Number, near : Number, far : Number)
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 8;
    this.camera.position.y = 5;

    /**** Controls *****/
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    /**** Lights *****/
    var lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    /**** Models *****/
    const laptopModel = new URL("../../../static/laptop.glb", import.meta.url);
    const loader = new GLTFLoader();
    loader.load(laptopModel.href, (gltf) => {
      const model = gltf.scene;
      // (X, Y, Z)
      gltf.scene.scale.set(1.5, 1.5, 1.5);
      // (X, Y, Z)
      gltf.scene.rotation.set(0, -0.42, -0.05);
      // (X, Y, Z)
      gltf.scene.position.set(0, -1.5, 0);

      this.scene.add(model);
    });

    /**** Start Animation *****/
    this.start();
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    //Animate Models Here
    //ReDraw Scene with Camera and Scene Object
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default ThreeScene;
