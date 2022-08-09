import {ActionReducerMap} from '@ngrx/store';
import * as fromFoodList from './foodlist.reducer';
import * as fromTodayList from './todaylist.reducer';


export interface GlobalState {

  [fromFoodList.foodListFeatureKey]: fromFoodList.FoodListState;
  [fromTodayList.todayListFeatureKey]: fromTodayList.TodayListState;

}

export const reducers: ActionReducerMap<GlobalState> = {
  [fromFoodList.foodListFeatureKey]: fromFoodList.FoodListReducer,
  [fromTodayList.todayListFeatureKey]: fromTodayList.TodayListReducer,

};
