import React, { useEffect, memo } from 'react';
//import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//import {
  //getSettleSingers
//} from "../../store/actionCreators";
//import {
  //getSizeImage
//} from "@/utils/format-utils";

//import HYThemeHeaderSmall from '@/components/theme-header-small';
import {
  SetterSongerWrapper
} from "./style";

export default memo(function HYSettleSinger() {
  // redux
  // const dispatch = useDispatch();
  // const state = useSelector((state) => ({
  //   settleSings: state.getIn(["recommend", "settleSings"])
  // }), shallowEqual);

  // hooks
  // useEffect(() => {
  //   dispatch(getSettleSingers());
  // }, [dispatch])

  return (
    <SetterSongerWrapper>
    </SetterSongerWrapper>
  )
})
