import React, {Suspense, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { OrbitControls, ScrollControls, useGLTF } from "@react-three/drei";
import url from "../../../assets/screenTyping.mp4";

import "./laptopModel.css";

const LaptopModel = () => {
  const laptop = useGLTF("laptop.glb");

  const [video] = useState (() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "anonymous";
    vid.muted = true;
    vid.loop = true;
    vid.play();
    return vid;
  });

  return (
    <group rotation={[0.25, .7, 0]} position={[0, -1, -1]} scale={2.5}>
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
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Canvas dpr={window.devicePixelRatio}>
        {width <= 768 ? null : <OrbitControls maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxZoom={1}
        minZoom={1}
        enablePan={false}
        enableZoom={false}
        />}
        <directionalLight intensity={1.5} />
        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>
    </Canvas>
  );
}

export default ThreeScene;