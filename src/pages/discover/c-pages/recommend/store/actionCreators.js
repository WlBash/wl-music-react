import * as actionTypes from "./constants";

import { 
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
})

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then((res) => {
      dispatch(changeBannerAction(res))
    })
  }
}

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum(10, 0).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch(idx) {
        case 0:
          dispatch(changeUpListAction(res));
          break;
        case 2:
          dispatch(changeNewListAction(res));
          break;
        case 3:
          dispatch(changeOriginListAction(res));
          break;
        default:
      }
      
    })
  }
}

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})

export const getSettleSingersAction = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}