import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { ScrollControls, useGLTF } from "@react-three/drei";
// Video for laptop screen
import url from "../../../assets/screenTyping.mp4";
// Styling
import "./laptopModel.css";


{/* This work is based on "Laptop" (https://sketchfab.com/3d-models/laptop-3487cc0341934da8aa8c294e8b006a23) by GeniusPilot2016 (https://sketchfab.com/GeniusPilot2016) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) */}

const LaptopModel = () => {
  // Load GLTF model
  const laptop = useGLTF("laptop.glb");
  // Load video
  const [video] = useState (() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "anonymous";
    vid.muted = true;
    vid.loop = true;
    vid.play();
    return vid;
  }, []);

  const ref = useRef();
  // Rotate laptop model
  useFrame(() => {
    if (ref.current.position.z > -1) {
      console.log("POSITION: ", ref.current.position.z);
      ref.current.position.z -= 0.1;
    }
    if (ref.current.rotation.y < 0.7) {
      console.log("Y: ", ref.current.rotation.y);
      ref.current.rotation.y += 0.018;
    }
  });
  // Return model with video texture
  return (
    // Laptop model
    <group ref={ref} rotation={[0.25, 0, 0]} position={[0, -1, 3]} scale={2.5}>
      <primitive object={laptop.scene} scale={0.5} />
      <mesh position={[0, 1, -1.11]} scale={0.14} rotation={[-0.175, 0, 0]}>
        <planeBufferGeometry args={[16, 10]} />
        <meshStandardMaterial emissive={"gray"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};



const ThreeScene = () => {
  // Get window width
  const [width, setWidth] = React.useState(window.innerWidth);
  // Update window width on resize
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  // Add event listener on mount
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Return canvas with model
  return (
    <Canvas dpr={window.devicePixelRatio}>
        <directionalLight intensity={1.5} />
        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>
    </Canvas>
  );
};


export default ThreeScene;