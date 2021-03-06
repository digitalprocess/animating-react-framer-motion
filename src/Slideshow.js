import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {wrap} from '@popmotion/popcorn'

const COLORS = [
	'var(--red)',
	'var(--blue)',
	'var(--black)',
	'var(--purp)',
	'var(--green)',
]

const variants = {
	enter: direction => ({
		x: direction > 0 ? 1000: -1000,
		opacity: 0
	}),
	center: {
		x: 0,
		opacity: 1
	},
	exit: direction => ({
		x: direction > 0 ? -1000 : 1000,
		opacity: 0
	})
}

const Slideshow = () => {
	const [ [ page, direction ], setPage ] = useState([0, 0])

	const paginate = direction => {
		setPage([ page + direction, direction ])
	}

	const index = wrap(0, COLORS.length, page)

	return (
		<div style={{ position: 'relative', height: 400 }}>
			<AnimatePresence custom={direction}>
				<motion.div
					key={page}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					drag='x'
					dragConstraints={{
						left: 0,
						right: 0
					}}
					dragElastic={2}
					onDragEnd={(ev, { offset, velocity }) => {
						console.log(offset.x)
						if (offset.x > 50) {
							paginate(-1)
						} else {
							paginate(1)
						}
					}}
					style={{
						height: 400,
						width: '100%',
						background: COLORS[index],
						position: 'absolute',
						left: 0,
						top: 0
					}}
					transition={{ damping: 300 }}
				/>
			</AnimatePresence>
			<div
				className="controls"
				style={{position: 'absolute'}}
			>
				<button onClick={() => paginate(-1)}>{'\u276E'}</button>
				<button onClick={() => paginate(1)}>{'\u276F'}</button>
			</div>
		</div>
	)
}

export default Slideshow
