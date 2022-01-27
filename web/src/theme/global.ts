import { extendTheme } from '@chakra-ui/react'

const global = extendTheme({
  styles: {
    global: {
      a: {
        color: '#FCC700',
        _hover: {
          textDecoration: 'none',
          color: '#FF8A00'
        },
        cursor: 'pointer',
        fontWeight: 'semibold',
      },
    },
  },

  breakpoints: {
    lg: '992px',
    xl: '993px',
    '2xl': '1500px'
  },

  components: {
    Link: {
      baseStyle: {
        fontWeight: 'semibold',
        fontColor: '#FCC700',
        _hover: {
          fontColor: '#FF8A00'
        }
      },
      sizes: {
        md: {
          h: '20px',
          fontSize: 'lg',
          px: '16px',
        },
      }
    },

    Input: {
      baseStyle: {
        borderRadius: '4px',
        margin: '10px',
        padding: '10px'
      },
    },

  },
})

export default global