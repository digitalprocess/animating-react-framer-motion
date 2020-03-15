import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
	open: { opacity: 1, x: 0 },
	closed: {
		x: '-100%',
		opacity: 0,
		transition: {
			delay: 0.2
		}
	}
}

const linkVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition : {
			delay: 0.3
		}
	},
	closed: {
		y: -20,
		opacity: 0,
	}
}

const links = [
	{name: 'one', href: '/one'},
	{name: 'two', href: '/two'},
	{name: 'three', href: '/three'},
	{name: 'four', href: '/four'},
]

const Nav = ({ isNavOpen, setIsNavOpen }) => {
	return (
		<MenuNav
			variants={variants}
			initial="closed"
			animate={isNavOpen ? 'open' : 'closed'}
			transition={{damping: 300}}
		>
			<button onClick={() => setIsNavOpen(!isNavOpen)}>Close</button>
			<ul>
				{links.map((link, key) => (
					<motion.li
						key={key}
						variants={linkVariants}
					>
						<a href={link.href}>{link.name}</a>
					</motion.li>
				))}
			</ul>
		</MenuNav>
	)
}

export default Nav


const MenuNav = styled(motion.nav)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: var(--black);
	padding: 40px;

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 1 1rem;
		padding: 0;
		font-size: 2rem;
	}

	a {
		color: white;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: 0.3s border ease;
		&:hover {
			border-bottom: 2px solid var(--blue);
		}
	}
`

MenuNav.defaultProps = {
	"data-id": "Nav"
}
