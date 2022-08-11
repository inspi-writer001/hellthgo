import React, { useRef, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import imag from "./assets/scene.gltf";
import "./index.css";
//import { useBox } from "use-cannon";
// import { PlaneBufferGeometry } from "three";
// import Star from "@mui/icons-material/Star";

const Box = () => {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

const Custom3D = () => {
  const image = useGLTF(imag);
  return (
    <group>
      <mesh></mesh>
    </group>
  );
};

const Plane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
};

// const Astars = () => {
//   const tmesh = useRef("null");
//   useFrame(() => (tmesh.current.rotation.x = tmesh.current.rotation.y += 0.01));
//   <tmesh>

//     <Stars />
//   </tmesh>;
// };

const Stage = () => {
  return (
    <div
      // className="stage"
      style={{ width: "100vw", height: "100%", display: "flex" }}
    >
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <Stars
          radius={50}
          depth={50}
          count={5000}
          factor={5}
          saturation={100}
          fade
          speed={1}
        />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        {/* <Box /> */}
        {/* <Plane /> */}
      </Canvas>
    </div>
  );
};

export default Stage;
