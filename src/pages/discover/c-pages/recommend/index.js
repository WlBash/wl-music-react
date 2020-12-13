import React, { memo } from 'react'
//import { useDispatch, useSelector, shallowEqual } from 'react-redux'
//import { getTopBannerAction } from './store/actionCreators'
import WlTopBanner from './c-cpns/top-banner'
import {
    RecommendWraper
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
          <WlTopBanner>
          </WlTopBanner>
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
