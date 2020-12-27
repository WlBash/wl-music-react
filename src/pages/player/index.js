import React, { memo } from 'react'

import WlPlayerInfo from './c-cpns/player-info';
import WlPlayerComment from './c-cpns/player-comment';
import WlPlayerSongs from './c-cpns/player-songs';
import WlPlayerRelevant from './c-cpns/player-relevant';

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style'

export default memo(function WlPlayer() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <WlPlayerInfo/>
                    <WlPlayerComment/>
                </PlayerLeft>
                <PlayerRight>
                    <WlPlayerSongs/>
                    <WlPlayerRelevant/>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
