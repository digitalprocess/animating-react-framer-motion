import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
	open: { opacity: 1, height: 'auto' },
	closed: { opacity: 0, height: 0 }
}

const Accordion = () => {
	const [ isToggled, setIsToggled ] = useState(false)
	return (
		<article>
			<h2
				role="button"
				onClick={() => setIsToggled(!isToggled)}
				style={{ cursor: 'pointer', overflow: "hidden" }}
			>
				Click Me
			</h2>
			<AnimatePresence>
				{isToggled &&
					<motion.div
						style={{overflow: 'hidden'}}
						variants={variants}
						initial="closed"
						animate="open"
						exit="closed"
					>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam possimus quasi laudantium inventore optio porro sunt eveniet quam vel. Aliquid nobis delectus maxime earum commodi corrupti nisi eligendi quaerat!</p>
					</motion.div>
				}
			</AnimatePresence>
		</article>
	)
}

export default Accordion
