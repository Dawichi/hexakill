import { writable, type Writable } from 'svelte/store'
import type { GameDTO } from '$lib/types/Game.dto'

export const gameData: Writable<GameDTO> = writable({
    view: 'welcome',
    username: '',
    characterIdx: -1,
    character: null,
    enemy: null,
    fighting: false,
    logs: {
        player: [],
        enemy: [],
    },
    powerUps: {
        pending: 0,
        history: {},
    },
    enemiesHistory: [],
})