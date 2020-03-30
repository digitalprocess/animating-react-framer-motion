import React, {useState} from 'react'
import { Card, CardGrid } from "./Elements"
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

import Modal from './Modal'
import Squares from './Squares'
import Accordion from './Accordion'

const About = () => {

	const [value, setValue,] = useState(0)
	const [isToggled, setToggle,] = useState(false)
	const [isCardActive, setIsCardActive] = useState(true)

	const x = useMotionValue(0)
	const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 100 }}
		>
			<h1>About</h1>
			<h2>Reorder Elements</h2>
			<Squares />
			<hr />
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

			<hr />

			<h2>Modal</h2>
			<button onClick={() => setToggle(!isToggled)}>
				Open
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

			<hr />

			<Accordion />

			<hr />

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
					<img src={purp} alt="color" />
				</Card>
				<AnimatePresence>
					{isCardActive &&
						<motion.div
							exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
							transition={{
								opacity: {
									duration: 0
								}
							}}
						>
							<Card
								onDragEnd={(event, info) => {
									if (Math.abs(info.point.x) > 50) {
										setIsCardActive(false)
									}
								}}
								drag='x'
								dragConstraints={{
									right: 0,
									left: 0,
								}}
								style={{
									x,
									opacity: isCardActive ? opacity : 0,
									background: "var(--blue)"
								}}
							>
								<h3>Some card</h3>
								<img src={blue} alt="color" />
							</Card>
						</motion.div>
					}
				</AnimatePresence>
				<Card style={{ background: "var(--black)" }}>
					<h3>Some card</h3>
					<img src={black} alt="color" />
				</Card>
				<Card style={{ background: "var(--green)" }}>
					<h3>Some card</h3>
					<img src={green} alt="color" />
				</Card>
			</CardGrid>
		</motion.div>
	)
}

export default About
