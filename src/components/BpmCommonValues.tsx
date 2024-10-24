import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useAtom } from 'jotai/index'
import { bpmAtom } from '../store/metronome.ts'
import { BPM_COMMON_VALUES } from '../types/Bpm.ts'

export const BpmCommonValues = () => {
  const [bpm, setBpm] = useAtom(bpmAtom)

  return (
    <ToggleButtonGroup
      value={bpm}
      color="primary"
      exclusive
      onChange={(_, value) => {
        if (value === null) return
        setBpm(value)
      }}
      sx={{
        '& .MuiToggleButton-root': {
          minWidth: 50,
        },
      }}
    >
      {BPM_COMMON_VALUES.map((value) => (
        <ToggleButton key={value} value={value}>
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
