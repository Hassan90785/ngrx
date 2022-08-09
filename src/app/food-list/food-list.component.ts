import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadGetFoodList, loadGetFoodListSuccess} from "../store/actions/foodlist.actions";
import {filter, Subscription} from "rxjs";
import {foodListSelector} from "../store/selectors/foodlist.selectors";
import {loadGetTodayListSuccess} from "../store/actions/todaylist.actions";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  constructor(private store: Store) {
    this.store.dispatch(loadGetFoodList({data: null}));
  }

  itemSource: any[] = [];
 payload : any[] = [];
  ngOnInit(): void {
    this.subscription.add(this.store.select(foodListSelector).pipe(filter(value => value != undefined)).subscribe(value => {
      this.itemSource = value
      this.payload = value
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  addToTodayList() {
    const items = this.payload.filter(value => value.isChecked);
    const removeitems = this.payload.filter(value => !value.isChecked);
    this.store.dispatch(loadGetFoodListSuccess({data: removeitems}));
    this.store.dispatch(loadGetTodayListSuccess({data: items}));
  }

  checboxHandler(param: any, item: any) {
    const isChecked = param.target.checked;
    if (isChecked) {
      const index = this.itemSource.findIndex((value: { food_id: any; }) => value.food_id === item.food_id);
      this.payload[index].isChecked = true;
    }else{
      const index = this.itemSource.findIndex((value: { food_id: any; }) => value.food_id === item.food_id);
      this.payload[index].isChecked = false;
    }
  }
}
