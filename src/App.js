
import './App.css';
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import Car from "./Car.js"
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";

export default function App() {
  return (
    <Wrapper className="App">
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #333333;
  canvas {
    width:100vw;
    height: 100vh;
  }
`;