/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import { PointerLockControls, Sky } from "@react-three/drei";
import {
  Environment,
  Sky,
  Html,
  Billboard,
  Text,
  Plane,
  Svg,
  Image,
} from "@react-three/drei";
import { Ground } from "./components/Ground.jsx";
import { Physics, RigidBody } from "@react-three/rapier";
import { Character } from "./components/Character.jsx";
import { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Outlines } from "@react-three/drei";
import {
  Selection,
  Select,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import ObjectInformation from "./components/ObjectInformation.jsx";

export const App = () => {
  return (
    <>
      {/* <PointerLockControls/> */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Character />
      </Physics>
    </>
  );
};

export default App;
