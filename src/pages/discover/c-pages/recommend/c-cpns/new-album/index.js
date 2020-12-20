import React, { useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
  getNewAlbumAction
} from "../../store/actionCreators";

import { Carousel } from 'antd';
import WlThemeHeaderRCM from '@/components/theme-header-rcm';
import WlAlbumCover from "@/components/album-cover";
import {
  AlbumWrapper
} from "./style";

export default memo(function WlNewAlbum(props) {
  // redux
  const state = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <WlThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
        <div className="content">
          <div className="arrow arrow-left sprite_02" 
              onClick={e => carouselRef.current.prev()}></div>
          <div className="album">
            <Carousel ref={carouselRef} dots={false}>
              {
                [0, 1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        state.newAlbums.slice(item*5, (item+1)*5).map(item => {
                          return (
                            <WlAlbumCover key={item.id} info={item}/>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className="arrow arrow-right sprite_02"
              onClick={e => carouselRef.current.next()}></div>
        </div>
    </AlbumWrapper>
  )
})