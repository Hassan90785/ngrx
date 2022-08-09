import {createAction, props} from '@ngrx/store';


export const loadGetTodayList = createAction(
  '[TodayList] Load Get Today List',
  props<{ data: any }>()
);

export const loadGetTodayListSuccess = createAction(
  '[TodayList] Load Get Today List Success',
  props<{ data: any }>()
);
