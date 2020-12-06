import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import routes from './router'

import WlAppHeader from '@/components/app-header'
import WlAppFooter from '@/components/app-footer'

import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <WlAppHeader></WlAppHeader>
      {renderRoutes(routes)}
      <WlAppFooter></WlAppFooter>
    </HashRouter>
  )
})

