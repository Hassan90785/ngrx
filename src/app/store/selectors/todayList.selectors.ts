import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTodayController from '../reducers/todaylist.reducer';
import * as _ from 'lodash-es';

/**
 * TodayList Selector
 */

export const selectTodayList = createFeatureSelector<
  fromTodayController.TodayListState>(fromTodayController.todayListFeatureKey);
export const todayListSelector = createSelector(selectTodayList,
  (todayListState: fromTodayController.TodayListState) => _.cloneDeep(todayListState.todayList));
