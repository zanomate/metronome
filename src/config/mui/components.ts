import { Components } from '@mui/material/styles/components'

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    huge: true
  }
}

export const components: Components = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderWidth: 2,
        borderColor: 'transparent',
        borderStyle: 'solid',
      },
    },
  },
  MuiSvgIcon: {
    variants: [
      {
        props: { fontSize: 'huge' },
        style: {
          fontSize: '5rem',
        },
      },
    ],
  },
}
