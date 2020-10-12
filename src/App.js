import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Html, draco } from 'drei'

function Model({ url }) {
  const { scene } = useLoader(GLTFLoader, url, draco())
  return <primitive object={scene} dispose={null} />
}

export default function App() {
  return (
    <Canvas invalidateFrameloop camera={{ position: [0, 5, 1] }}>
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <OrbitControls />
      <Suspense fallback={<Html>loading..</Html>}>
        <Model url="/suzanne-draco.glb" />
      </Suspense>
    </Canvas>
  )
}
