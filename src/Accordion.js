import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Accordion = () => {
	const [ isToggled, setIsToggled ] = useState(false)
	return (
		<article>
			<h2
				role="button"
				onClick={() => setIsToggled(!isToggled)}
				style={{ cursor: 'pointer' }}
			>
				Click Me
			</h2>
			<AnimatePresence>
				{isToggled &&
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						style={{overflow: 'hidden'}}
					>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam possimus quasi laudantium inventore optio porro sunt eveniet quam vel. Aliquid nobis delectus maxime earum commodi corrupti nisi eligendi quaerat!</p>
					</motion.div>
				}
			</AnimatePresence>
		</article>
	)
}

export default Accordion
