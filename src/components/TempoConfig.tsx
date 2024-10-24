import MusicNoteIcon from '@mui/icons-material/MusicNote'
import RemoveIcon from '@mui/icons-material/Remove'
import { Button, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { currentBeatAtom, playAtom, tempoAtom } from '../store/metronome.ts'

export const TempoConfig = () => {
  const [tempo, setTempo] = useAtom(tempoAtom)
  const currentBeat = useAtomValue(currentBeatAtom)
  const play = useAtomValue(playAtom)

  const handleRemoveBeat = () => {
    const newTempo = tempo.slice(0, -1)
    setTempo(newTempo)
  }

  const handleAddBeat = () => {
    const newTempo = [...tempo, false]
    setTempo(newTempo)
  }

  const handleToggleBeat = (i: number) => {
    const newTempo = [...tempo]
    newTempo[i] = !newTempo[i]
    setTempo(newTempo)
  }

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={handleRemoveBeat} disabled={tempo.length <= 1}>
        -
      </Button>
      <ToggleButtonGroup>
        {tempo.map((on, i) => (
          <ToggleButton
            selected={play && currentBeat === i}
            value={i}
            onClick={() => {
              handleToggleBeat(i)
            }}
            sx={{ width: 40 }}
          >
            {on ? <MusicNoteIcon /> : <RemoveIcon />}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Button variant="outlined" onClick={handleAddBeat} disabled={tempo.length >= 16}>
        +
      </Button>
    </Stack>
  )
}
