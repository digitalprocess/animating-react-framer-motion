import React, {useState} from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements"
import "./App.css"
import Menu from "./Menu"
import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

// By default all transforms are 3d.
// You should only animate transforms and opacity
// Translate shortcuts: x, y, z
// Translate: translateX, translateY, translateZ
// Scale: scale, scaleX, scaleY
// Rotate: rotate, rotateX, rotateY, rotateZ
// Skew: skew, skewX, skewY

function App() {
	const [ value, setValue, ] = useState(0)
	const [ isToggled, setToggle, ] = useState(1)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Header>
				<Menu />
				<h1>Header</h1>
			</Header>
			<Container>
				<AnimatePresence>
					{isToggled &&
						<motion.h2
							initial ={{ opacity: 0 }}
							animate={{ opacity: isToggled }}
							exit={{ opacity: 0 }}
						>
							Super Cool
						</motion.h2>
					}
				</AnimatePresence>
				<button onClick={() => setToggle(prevValue => prevValue ? 0: 1)}>
					Toggle
				</button>
				<input
					type="range"
					min="-100" max="100"
					value={value}
					onChange={ev => setValue(ev.target.value)}
				/>
				<CardGrid>
					<Card style={{ background: "var(--purp)" }}>
						<h3>Some card</h3>
						<img src={purp} alt="color"/>
					</Card>
					<Card style={{ background: "var(--blue)" }}>
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
