import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {todayListSelector} from "../store/selectors/todayList.selectors";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  constructor(private store: Store) {
  }

  itemSource: any[] = [];

  ngOnInit(): void {
    this.subscription.add(this.store.select(todayListSelector).pipe(filter(value => value != undefined)).subscribe(value => {
      this.itemSource = value
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
