import { useAtomValue, useSetAtom } from 'jotai'
import { memo, useEffect, useMemo } from 'react'
import { bpmAtom, currentBeatAtom, playAtom, tempoAtom } from '../store/metronome.ts'
import { Metronome } from '../utils/Metronome.ts'

export const MetronomeSounds = memo(() => {
  const play = useAtomValue(playAtom)
  const bpm = useAtomValue(bpmAtom)
  const tempo = useAtomValue(tempoAtom)
  const setCurrentBeat = useSetAtom(currentBeatAtom)

  const metronome = useMemo(() => new Metronome(), [])

  useEffect(() => {
    if (play) {
      metronome.start(bpm, tempo, (beatIndex) => {
        setCurrentBeat(beatIndex)
      })
    } else {
      metronome.stop()
    }
  }, [metronome, play, bpm, tempo, setCurrentBeat])

  return null
})
