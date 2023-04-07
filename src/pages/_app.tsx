/* eslint-disable @typescript-eslint/no-unused-vars */
import 'tailwindcss/tailwind.css'
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'

import { Provider } from 'react-redux'

import { wrapper } from '@/lib/store'

const App = ({ Component, ...appProps }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrapper.useWrappedStore(appProps)

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default App
