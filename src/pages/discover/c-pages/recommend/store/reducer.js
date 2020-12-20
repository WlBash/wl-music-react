import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},

  settleSings: [],
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);  
    case actionTypes.CHANGE_UP_LIST:
        return state.set("topUpList", action.topUpList);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("topNewList", action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("topOriginList", action.topOriginList);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
}

export default reducer