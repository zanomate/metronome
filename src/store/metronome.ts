import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const bpmAtom = atomWithStorage<number>('bpm', 100)

export const tempoAtom = atomWithStorage<boolean[]>('tempo', [true, false, false, false])
export const currentBeatAtom = atom<number>(0)

export const playAtom = atom<boolean>(false)
