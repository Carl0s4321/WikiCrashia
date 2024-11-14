import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../Loader'

const Earth = () => {
  const earth = useGLTF('../../assets/planet/scene.gltf')
  return (
    <mesh>
      <primitive object={earth.scene} 
        scale={2.3} 
        position-y={0}
        rotation-y={0}
        />
    </mesh> 
  )
}

const EarthCanvas = () => {
  return(
    <Canvas shadows frameloop='demand' gl={{preserveDrawingBuffer: true}} camera={{}}>
      <Suspense fallback={<Loader/>}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas