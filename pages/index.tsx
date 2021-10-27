/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import Welcome from '../components/Welcome'
import { load, save } from '../lib/localstorage'

export default function Index() {

	const start = (loadLastgame: boolean) => {
		if (loadLastgame) {setGameState(load())}
		setPlaying(true)
	}
	
	const [gameState, setGameState] = useState({
		name: 'David',
		type: 'coffee',
		dmg: 60,
		armor: 20,
		level: 1,
		exp: 0,
	})

	save(gameState)
	
	const [menuVisibility, setMenuVisibility] = useState(false)
	const [firstRender, setFirstRender] = useState(true)
	const [playing, setPlaying] = useState(false)

	const title_class = ' text-white font-bold tracking-wider text-xl p-3 rounded-xl bg-gradient-to-br '
	const coming = ' animate__animated animate__fadeIn animate__fast'
	const leaving = ' animate__animated animate__fadeOut animate__fast '

	const animation = firstRender ? 'opacity-0' : menuVisibility ? coming : leaving

	// if (loading) return <Loader />

	return (
		<>
		{ !playing &&
			<Welcome
				setFirstRender={setFirstRender}
				setMenuVisibility={setMenuVisibility}
				menuVisibility={menuVisibility}
				title_class={title_class}
				animation={animation}
				start={start}
			/>
		}
		{ playing && <Base gameState={gameState} setGameState={setGameState} /> }
		</>
	)
}