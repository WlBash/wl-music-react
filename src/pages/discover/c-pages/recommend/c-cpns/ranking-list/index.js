import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopListAction
} from "../../store/actionCreators";

import WlThemeHeaderRCM from '@/components/theme-header-rcm';
import WlTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function WlRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <WlThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <WlTopRanking info={state.topUpList}/>
        <WlTopRanking info={state.topNewList}/>
        <WlTopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})
