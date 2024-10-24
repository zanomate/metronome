import { Container, Stack, Typography } from '@mui/material'
import { BpmCommonValues } from './components/BpmCommonValues.tsx'
import { BpmNumber } from './components/BpmNumber.tsx'
import { MetronomeSounds } from './components/MetronomeSounds.tsx'
import { StartStopButton } from './components/StartStopButton.tsx'
import { TempoConfig } from './components/TempoConfig.tsx'

export const App = () => {
  return (
    <Container>
      <Stack spacing={2} sx={{ mt: 2, alignItems: 'center' }}>
        <Typography variant="h4">Metronome</Typography>
        <Typography variant="subtitle2">BPM</Typography>
        <BpmNumber />
        <BpmCommonValues />
        <Typography variant="subtitle2">Tempo</Typography>
        <TempoConfig />
        <StartStopButton />
        <MetronomeSounds />
      </Stack>
    </Container>
  )
}
