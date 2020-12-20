import React, { memo } from 'react'

import WlTopBanner from './c-cpns/top-banner'
import WlHotRecommend from './c-cpns/hot-recommend'
import WlNewAlbum from './c-cpns/new-album'
import WlRankingList from './c-cpns/ranking-list'
import WlUserLogin from './c-cpns/user-login'
import WlSettleSinger from './c-cpns/settle-singer'
import WlHotRadio from './c-cpns/hot-radio'
import {
    RecommendWraper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'

function WlRecommend(props) {
    return (
        <RecommendWraper>
          <WlTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <WlHotRecommend />
                    <WlNewAlbum />
                    <WlRankingList />
                </RecommendLeft>
                <RecommendRight>
                    <WlUserLogin />
                    <WlSettleSinger />
                    <WlHotRadio />
                </RecommendRight>
            </Content>
        </RecommendWraper>
    )
}

export default memo(WlRecommend);
