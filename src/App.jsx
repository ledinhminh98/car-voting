import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Background from './components/Background'
import Frames from './components/Frames'
import Texts from './components/Texts'

export const App = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
    <color attach="background" args={['#24172F']} />

    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[8, 20]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={15}
          roughness={0.99}
          depthScale={1.1}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.3}
          color="#211727"
          metalness={0.8}
        />
      </mesh>
    </group>

    <Texts />
    <Environment preset="city" />
  </Canvas>
)