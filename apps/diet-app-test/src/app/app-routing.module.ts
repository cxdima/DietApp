import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';

const routes: Routes = [
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'dinner', component: BreakfastComponent },
  { path: 'dessert', component: BreakfastComponent },
  { path: 'drinks', component: BreakfastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
