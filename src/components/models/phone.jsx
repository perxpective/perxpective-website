import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './model'

const PhoneModel = () => {
    return (
        <Container
            mt={"5rem"}
            w={{ md: '85vw' }}
            h={{ base: '10rem', sm: '15rem', md: '20rem' }}
            id={"contact"}
        >
            <Suspense
                fallback={<Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                    mt={"5rem"}
                />}
            >
                <Canvas
                    frameloop='demand'
                    shadows
                    camera={{ position: [15, -35, -20], fov: 16 }}
                    viewport={{ zoom: 3 }}
                >
                    <Model path={"/models/Phone.glb"} scale={1.9} />
                    <OrbitControls autoRotate={true} />
                </Canvas>
            </Suspense>
        </Container>
    )
}

export default PhoneModel