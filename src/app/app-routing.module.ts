import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { ChartsComponent } from './charts/charts.component';
import { FoodListComponent } from './food-list/food-list.component';


const routes: Routes = [
  { path: 'today', component: TodayComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'food-list', component: FoodListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponent=[TodayComponent,ChartsComponent,FoodListComponent]
