import { Container, Spinner } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import Model from './model'

const DesktopModel = () => {
	return (
		<Container
			mt={"5rem"}
			w={{md:'85vw'}}
			h={{base: '10rem', sm: '20rem', md: '25rem', lg: '30rem'}}
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
					camera={{ position: [-10, 3, -10], fov: 16 }}
					viewport={{ zoom: 3 }}
				>
						<Model path={"/models/Desktop.glb"} scale={2} />
						<OrbitControls autoRotate={true} />
				</Canvas>
			</Suspense>
		</Container>
	)
}

export default DesktopModel