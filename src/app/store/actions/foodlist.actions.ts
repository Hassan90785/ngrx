import {createAction, props} from '@ngrx/store';


export const loadGetFoodList = createAction(
  '[FoodList] Load Get Food List',
  props<{ data: any }>()
);

export const loadGetFoodListSuccess = createAction(
  '[FoodList] Load Get Food List Success',
  props<{ data: any }>()
);
export const loadServiceFailure = createAction(
  '[ServiceFailure] Load ServiceFailure',
  props<{ err: any }>()
);
