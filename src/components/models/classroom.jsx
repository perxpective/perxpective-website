import { Container } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/Classroom.glb')
    const { viewport } = useThree()
    return (
        <mesh
            scale={(viewport.width / 6)}
        >
            <ambientLight intensity={1} />
            <hemisphereLight intensity={6} groundColor={"black"} />
            <spotLight position={[10, 10, 10]} angle={0.2} intensity={5} penumbra={2} castShadow />
            <pointLight position={[10, 10, 10]} />
            <primitive
                object={gltf.scene}
                scale={0.8}
                position={[0, -0.3, 0]}
            />
        </mesh>
    )
}

const ClassroomModel = () => {
    return (
        <Container
            w={{ md: '85vw' }}
            h={{ base: '10rem', sm: '20rem', md: '25rem' }}
        >
            <Canvas
                frameloop='demand'
                shadows
                camera={{ position: [10, 4, 10], fov: 16 }}
                viewport={{ zoom: 1.5 }}
            >
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls autoRotate={true} />
                </Suspense>
            </Canvas>
        </Container>
    )
}

export default ClassroomModel