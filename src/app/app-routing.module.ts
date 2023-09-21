import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ReviewComponent } from './pages/review/review.component';
import { ReachusComponent } from './pages/reachus/reachus.component';

const routes: Routes = [
   {path:"",component: HomeComponent},
   {path:"workshops",component: WorkshopsComponent},
   {path:"reviews",component: ReviewComponent},
   {path:"reachus",component: ReachusComponent},
   {path:"events",
   loadChildren:() => import('./events/events.module').then(m => m.EventsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
