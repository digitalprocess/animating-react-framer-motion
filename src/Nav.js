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

const ulVariants = {
	open: {
		opacity: .5,
		transition : {
			staggerChildren: 0.3,
			delayChildren: 0.2,
			staggerDirection: -1, // 1 = forward,-1 = backwards
			when: 'afterChildren', // "afterChildren", "beforeChildren"
		}
	},
	closed: {
		opacity: 1
	}
}

const linkVariants = {
	open: {
		y: 0,
		opacity: 1,
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
			<motion.ul
				variants={ulVariants}
			>
				{links.map((link, key) => (
					<motion.li
						key={key}
						variants={linkVariants}
					>
						<a href={link.href}>{link.name}</a>
					</motion.li>
				))}
			</motion.ul>
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
	padding: 40px;
	background: var(--black);

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: 0;
		font-size: 2rem;
		margin: 0 1 1rem;
	}

	a {
		color: white;
		text-decoration: none;
		transition: 0.3s border ease;
		border-bottom: 2px solid transparent;
		&:hover {
			border-bottom: 2px solid var(--blue);
		}
	}
`

MenuNav.defaultProps = {
	"data-id": "Nav"
}
