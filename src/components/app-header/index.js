import React, { memo } from 'react'

import{
    AppHeaderWrapper,
    headerLeft,
    headerRight
} from './style'


export default memo(function WlAppHeader() {
    return (
        <AppHeaderWrapper>
            <div className="content wrap-v1">
                <headerLeft>
                    <a className="logo sprite_01" href="#/">网易云音乐</a>
                </headerLeft>
                <headerRight></headerRight>
            </div>
        </AppHeaderWrapper>
    )
})
