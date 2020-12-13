import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  // hotRecommends: [],
  // newAlbum: [],
  // topUpList: {},
  // topNewList: {},
  // topOriginList: {},

  // settleSings: [],
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BNNAER:
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
}

export default reducer