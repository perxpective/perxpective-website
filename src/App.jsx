import { useState } from 'react'
import './App.css'

// Components
import NavBar from './components/sections/navbar'
import Hero from './components/sections/hero'
import Education from './components/sections/education'
import About from './components/sections/about'
import Work from './components/sections/work'

// Three.js Models
import DesktopModel from './components/models/desktop'
import ClassroomModel from './components/models/classroom'
import OfficeModel from './components/models/office'

// Chakra UI Components
import { Container } from '@chakra-ui/react'
import TableModel from './components/models/table'
import Projects from './components/sections/projects'

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
		<OfficeModel />
		<Work />
		<TableModel />
		<Projects />
	</Container>
	)
}

export default App
