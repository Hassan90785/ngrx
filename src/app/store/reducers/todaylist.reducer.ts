import {Action, createReducer, on} from '@ngrx/store';
import {loadGetTodayListSuccess} from "../actions/todaylist.actions";


export const todayListFeatureKey = 'todayList';

export interface TodayListState {
  readonly todayList: any;
}

export const TodayListInitialState: TodayListState = {
  todayList: undefined
};


export const TodayListStateReducer = createReducer(
  TodayListInitialState,
  on(loadGetTodayListSuccess, (todayListData, {data}) => ({todayList: data})),
);

export function TodayListReducer(todayListState: TodayListState | undefined, action: Action) {
  return TodayListStateReducer(todayListState, action);
}
