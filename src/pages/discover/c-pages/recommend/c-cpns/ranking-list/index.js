import React, { useEffect, memo } from 'react';
//import { useDispatch, useSelector, shallowEqual } from "react-redux";

//import {
  //getTopData
//} from "../../store/actionCreators";

import WlThemeHeaderRCM from '@/components/theme-header-rcm';
//import HYTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function WlRankingList() {
  // redux
  // const dispatch = useDispatch();
  // const state = useSelector((state) => ({
  //   topUpList: state.getIn(["recommend", "topUpList"]),
  //   topNewList: state.getIn(["recommend", "topNewList"]),
  //   topOriginList: state.getIn(["recommend", "topOriginList"])
  // }), shallowEqual);

  // hooks
  // useEffect(() => {
  //   dispatch(getTopData(0));
  //   dispatch(getTopData(2));
  //   dispatch(getTopData(3));
  // }, [dispatch])

  return (
    <RankingWrapper>
      <WlThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      {/* <div className="tops">
        <HYTopRanking info={state.topUpList}/>
        <HYTopRanking info={state.topNewList}/>
        <HYTopRanking info={state.topOriginList}/>
      </div> */}
    </RankingWrapper>
  )
})
