import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromFoodController from '../reducers/foodlist.reducer';
import * as _ from 'lodash-es';

/**
 * FoodList Selector
 */

export const selectFoodList = createFeatureSelector<
  fromFoodController.FoodListState>(fromFoodController.foodListFeatureKey);
export const foodListSelector = createSelector(selectFoodList,
  (foodListState: fromFoodController.FoodListState) => _.cloneDeep(foodListState.foodList));
