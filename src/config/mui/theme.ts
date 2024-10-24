import { createTheme } from '@mui/material'
import { components } from './components.ts'

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components,
})
