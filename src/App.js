import React, { memo } from 'react'
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import routes from './router'
import store from './store'

import WlAppHeader from '@/components/app-header'
import WlAppFooter from '@/components/app-footer'
import WlAppPlayerBar from '@/pages/player/app-player-bar'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WlAppHeader></WlAppHeader>
        {renderRoutes(routes)}
        <WlAppPlayerBar />
        <WlAppFooter></WlAppFooter>
      </HashRouter>
    </Provider>
  )
})

