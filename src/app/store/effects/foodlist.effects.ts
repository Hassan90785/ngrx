import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as foodListActions from '../actions/foodlist.actions';
import {loadServiceFailure} from '../actions/foodlist.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable()
export class FoodListEffects {

  getFoodList$ = createEffect(() =>
    this.actions$.pipe(
      // Filters by Action Creator 'login'
      ofType(foodListActions.loadGetFoodList),
      switchMap(action =>
        this.getFoodList().pipe(
          map(data => foodListActions.loadGetFoodListSuccess({data})),
          catchError(err => of(loadServiceFailure({err})))
        )
      )
    )
  );

  constructor(private actions$: Actions) {
  }

  getFoodList(): Observable<any> {
    const resp =[
      {
        "food_id":1,
        "isChecked":false,
        "food_name":"Cupcake",
        "calories":300,
        "fat":4,
        "carbs":2,
      },
      {
        "food_id":2,
        "isChecked":false,
        "food_name":"Donut",
        "calories":250,
        "fat":4,
        "carbs":2,
      },
    ];
    return of(resp)
  }
}
