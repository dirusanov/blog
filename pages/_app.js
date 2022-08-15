import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { YMInitializer } from 'react-yandex-metrika'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

import SEO from '../next-seo-config'

import GlobalStyle from '@/components/GlobalStyle'
import { lightTheme, darkTheme } from '@/components/Themes'
import Layout from '@/components/Layout'
import { useDarkMode } from '@/hooks/useDarkMode'
// import useGaTracker from '../useGaTracker'

export default function App({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <YMInitializer
        accounts={[74360284]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        }}
      />
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Layout theme={theme} themeToggler={themeToggler}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
