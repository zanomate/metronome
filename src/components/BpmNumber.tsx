import { Button, Stack, TextField, TextFieldProps, Typography, useTheme } from '@mui/material'
import { useAtom } from 'jotai/index'
import { NumericFormat } from 'react-number-format'
import { bpmAtom } from '../store/metronome.ts'

export const BpmNumber = () => {
  const { typography } = useTheme()
  const [bpm, setBpm] = useAtom(bpmAtom)

  const handleBpmChangeFactory = (value: number) => () => {
    setBpm((prev) => prev + value)
  }

  return (
    <Stack direction="row" spacing={0}>
      <Button variant="outlined" onClick={handleBpmChangeFactory(-5)}>
        <Typography variant="h6">-5</Typography>
      </Button>
      <Button variant="outlined" onClick={handleBpmChangeFactory(-1)}>
        <Typography variant="subtitle1">-1</Typography>
      </Button>
      <NumericFormat<TextFieldProps>
        customInput={TextField}
        // getInputRef={ref}
        isAllowed={(values) => {
          if (values.floatValue === undefined) return true
          if (values.floatValue <= 0) return false
          if (values.floatValue >= 1000) return false
          return true
        }}
        decimalScale={0}
        value={bpm}
        onChange={(e) => {
          setBpm(parseInt(e.target.value))
        }}
        onFocus={(e) => {
          e.target.select()
        }}
        onBlur={(e) => {
          if (e.target.value === '') {
            setBpm(1)
          }
        }}
        sx={{
          width: 120,
          '& input': {
            userSelect: 'all',
            textAlign: 'center',
            fontSize: typography.h3.fontSize,
          },
        }}
      />
      <Button variant="outlined" onClick={handleBpmChangeFactory(1)}>
        <Typography variant="subtitle1">+1</Typography>
      </Button>
      <Button variant="outlined" onClick={handleBpmChangeFactory(5)}>
        <Typography variant="h6">+5</Typography>
      </Button>
    </Stack>
  )
}
