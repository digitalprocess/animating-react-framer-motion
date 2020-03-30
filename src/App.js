import React, {useState} from "react"
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import { Container, Header } from "./Elements"
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'

import "./App.css"
import Menu from "./Menu"

import Nav from './Nav'
import Home from "./Home"
import About from "./About"

// By default all transforms are 3d.
// You should only animate transforms and opacity
// Translate shortcuts: x, y, z
// Translate: translateX, translateY, translateZ
// Scale: scale, scaleX, scaleY
// Rotate: rotate, rotateX, rotateY, rotateZ
// Skew: skew, skewX, skewY

function App() {
	const [ isNavOpen, setIsNavOpen, ] = useState(false)
	const location = useLocation()

	const x = useMotionValue(0)

	console.log(x)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Header>
				<Menu onClick={() => setIsNavOpen(!isNavOpen)} />
				<Nav
					isNavOpen={isNavOpen}
					setIsNavOpen={setIsNavOpen}
				/>
				<h1>Animating React with Framer Motion</h1>
			</Header>
			<Container>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
					</Switch>
				</AnimatePresence>
			</Container>
		</motion.div>
	)
}

const AppWrapper = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

export default AppWrapper
