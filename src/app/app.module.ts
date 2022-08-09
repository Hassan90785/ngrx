import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { TodayComponent } from './today/today.component';
import { FoodListComponent } from './food-list/food-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {reducers} from "./store/reducers";
import {FoodListEffects} from "./store/effects/foodlist.effects";


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TodayComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25}),
    EffectsModule.forRoot([FoodListEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
