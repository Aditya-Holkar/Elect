import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Center } from '@react-three/drei'
import { PageSkeleton } from './ui/Skeleton'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={1.5}>
        <Center>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#f59e0b" wireframe />
          </mesh>
        </Center>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  )
}

export default function Scene3D() {
  return (
    <Suspense fallback={<div className="h-96 w-full flex items-center justify-center"><PageSkeleton /></div>}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="h-96 w-full">
        <SceneContent />
      </Canvas>
    </Suspense>
  )
}
