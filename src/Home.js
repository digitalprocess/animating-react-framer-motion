import React from 'react'
import {motion} from 'framer-motion'
import Slideshow from './Slideshow'

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<h1>Home</h1>
			<h2>Slideshow</h2>
			<Slideshow />
			<hr />
		</motion.div>
	)
}

export default Home
