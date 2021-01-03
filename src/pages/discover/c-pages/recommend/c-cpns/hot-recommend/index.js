import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
//import { useHistory } from 'react-router-dom';

import WlThemeHeaderRCM from '@/components/theme-header-rcm'
import WlThemeCover from '@/components/theme-cover'
import {
    getHotRecommendAction
} from "../../store/actionCreators";

import { 
  RecommendWrapper
} from "./style";


export default memo(function WlHotRecommend() {
  // redux
   const { hotRecommends } = useSelector(state => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"])
   }), shallowEqual);
   const dispatch = useDispatch();
//   const history = useHistory();

   useEffect(() => {
     dispatch(getHotRecommendAction())
   }, [dispatch]);

//   const keywordClick = useCallback((keyword) => {
//     history.push({pathname: "/discover/songs", cat: keyword});
//   }, [history]);

  return (
    <RecommendWrapper>
      <WlThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
        <div className="recommend-list">
            {
                hotRecommends.slice(0, 8).map((item, index) => {
                    return(
                        <WlThemeCover key={item.id} info={item} />
                    )
                })
            }       
        </div>
    </RecommendWrapper>
  )
})
