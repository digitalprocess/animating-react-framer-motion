import React, {useState} from "react"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements"

import "./App.css"
import Menu from "./Menu"
import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

import Nav from './Nav'
import Modal from './Modal'
import Accordion from './Accordion'

// By default all transforms are 3d.
// You should only animate transforms and opacity
// Translate shortcuts: x, y, z
// Translate: translateX, translateY, translateZ
// Scale: scale, scaleX, scaleY
// Rotate: rotate, rotateX, rotateY, rotateZ
// Skew: skew, skewX, skewY

function App() {
	const [ value, setValue, ] = useState(0)
	const [ isNavOpen, setIsNavOpen, ] = useState(false)
	const [ isToggled, setToggle, ] = useState(false)
	const x = useMotionValue(0)
	const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

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
				<motion.h2
					animate={{ x: value + 'px' }}
				>
					Slide Me
				</motion.h2>
				<input
					type="range"
					min="-100"
					max="100"
					value={value}
					onChange={ev => setValue(ev.target.value)}
				/>

				<hr/>

				<h2>Modal</h2>
				<button onClick={() => setToggle(!isToggled)}>
					Toggle
				</button>
				<Modal
					isToggled={isToggled}
					setToggle={setToggle}
				>
					<Card style={{ background: "var(--black)" }}>
						<h3>Some card</h3>
						<img src={black} alt="color" />
					</Card>
				</Modal>

				<hr/>

				<Accordion />

				<hr/>

				<CardGrid>
					<Card
						drag
						dragConstraints={{
							top: -100,
							right: 100,
							bottom: 100,
							left: -100,
						}}
						style={{ background: "var(--purp)" }}
					>
						<h3>Some card</h3>
						<img src={purp} alt="color"/>
					</Card>
					<Card
						drag='x'
						dragConstraints={{
							right: 100,
							left: -100,
						}}
						style={{
							x,
							opacity,
							background: "var(--blue)"
						}}
					>
						<h3>Some card</h3>
						<img src={blue} alt="color"/>
					</Card>
					<Card style={{ background: "var(--black)" }}>
						<h3>Some card</h3>
						<img src={black} alt="color"/>
					</Card>
					<Card style={{ background: "var(--green)" }}>
						<h3>Some card</h3>
						<img src={green} alt="color"/>
					</Card>
				</CardGrid>
			</Container>
		</motion.div>
	)
}

export default App
