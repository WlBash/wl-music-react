import React, { memo } from 'react'
//import { useDispatch, useSelector, shallowEqual } from 'react-redux'
//import { getTopBannerAction } from './store/actionCreators'
import WlTopBanner from './c-cpns/top-banner'
import WlHotRecommend from './c-cpns/hot-recommend'
import WlNewAlbum from './c-cpns/new-album'
import WlRankingList from './c-cpns/ranking-list'
import {
    RecommendWraper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style'
function WlRecommend(props) {

    // const { topBanners } = useSelector(state => ({
    //     topBanners: state.getIn(["recommend","topBanners"])
    // }), shallowEqual)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getTopBannerAction())
    // }, [dispatch])

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
                </RecommendRight>
            </Content>
        </RecommendWraper>
    )
}

// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

export default memo(WlRecommend);
