import React, { useEffect } from "react";
import "./laptopModel.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as dat from "dat.gui";

const LaptopModel = () => {
  useEffect(() => {
    /**** Scene ****/
    const scene = new THREE.Scene();

    /**** Camera ****/
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 1);

    /**** Renderer ****/
    const canvas = document.getElementById("myThreeJSCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /**** Lighting ****/
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // const spotLight = new THREE.SpotLight(0xffffff, 1);
    // spotLight.position.set(0, 30, 100);
    // spotLight.castShadow = true;
    // scene.add(spotLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 30, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(0, 30, -100);
    directionalLight2.castShadow = true;
    scene.add(directionalLight2);

    /**** Animate ****/
    const animate = () => {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    /**** Controls ****/
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    /**** Model ****/
    const laptopModel = new URL("../../../static/laptop.glb", import.meta.url);
    const loader = new GLTFLoader();
    loader.load(laptopModel.href, (gltf) => {
      const model = gltf.scene;
      gltf.scene.scale.set(0.15, 0.15, 0.15);
      gltf.scene.rotation.set(0, 1, 0);
      gltf.scene.position.set(0, 0, 0);

      scene.add(model);
    });
  }, []);

  return (
    <div className="laptopModel">
      <canvas id="myThreeJSCanvas" />
    </div>
  );
};

export default LaptopModel;
