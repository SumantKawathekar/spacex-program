import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchFiltersComponent } from './launch-filters/launch-filters.component';


const routes: Routes = [{
  path: '',
  component: LaunchFiltersComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class LaunchProgramRoutingModule { }
