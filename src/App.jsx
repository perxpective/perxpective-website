import { useState } from 'react'
import './App.css'

import NavBar from './components/sections/navbar'
import Hero from './components/sections/hero'
import Education from './components/sections/education'
import About from './components/sections/about'

import DesktopModel from './components/models/desktop'
import ClassroomModel from './components/models/classroom'
import { Container } from '@chakra-ui/react'

function App() {
	return (
	<Container
		maxW={"container.sm"}
	>	
		<NavBar />
		<DesktopModel />
		<Hero />
		<About />
		<ClassroomModel />
		<Education />
	</Container>
	)
}

export default App
