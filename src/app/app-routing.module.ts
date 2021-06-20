import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard/add', component: AddPropertyComponent },
  { path: 'dashboard/details', component: PropertyDetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
