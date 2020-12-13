import React, { useEffect, useRef, memo } from 'react';
//import { useSelector, useDispatch, shallowEqual } from 'react-redux';

//import {
  //getAlbum
//} from "../../store/actionCreators";

//import { Carousel } from 'antd';
import WlThemeHeaderRCM from '@/components/theme-header-rcm';
//import HYAlbumCover from "@/components/album-cover";
import {
  AlbumWrapper
} from "./style";

export default memo(function WlNewAlbum(props) {
  // redux
  // const state = useSelector(state => ({
  //   newAlbum: state.getIn(["recommend", "newAlbum"])
  // }), shallowEqual);
  // const dispatch = useDispatch();

  // hooks
  // const carouselRef = useRef();
  // useEffect(() => {
  //   dispatch(getAlbum());
  // }, [dispatch]);

  return (
    <AlbumWrapper>
      <WlThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
    </AlbumWrapper>
  )
})
