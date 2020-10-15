import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'launch-program',
  loadChildren: () => import('./launch-program/launch-program.module').then(m => m.LaunchProgramModule)
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
