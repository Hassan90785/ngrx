import {Action, createReducer, on} from '@ngrx/store';
import {loadGetFoodListSuccess} from "../actions/foodlist.actions";


export const foodListFeatureKey = 'foodList';

export interface FoodListState {
  readonly foodList: any;
}

export const FoodListInitialState: FoodListState = {
  foodList: undefined
};


export const FoodListStateReducer = createReducer(
  FoodListInitialState,
  on(loadGetFoodListSuccess, (foodListData, {data}) => ({foodList: data})),
);

export function FoodListReducer(foodListState: FoodListState | undefined, action: Action) {
  return FoodListStateReducer(foodListState, action);
}
