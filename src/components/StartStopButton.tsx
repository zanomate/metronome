import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import { IconButton } from '@mui/material'
import { useAtom } from 'jotai'
import { playAtom } from '../store/metronome.ts'

export const StartStopButton = () => {
  const [play, setPlay] = useAtom(playAtom)

  return (
    <IconButton
      onClick={() => {
        setPlay((p) => !p)
      }}
      sx={{
        borderColor: play ? 'red' : 'green',
      }}
    >
      {play ? <StopIcon fontSize="huge" /> : <PlayArrowIcon fontSize="huge" />}
    </IconButton>
  )
}
