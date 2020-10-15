import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchProgramRoutingModule } from './launch-program-routing.module';
import { LaunchFiltersComponent } from './launch-filters/launch-filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LaunchFiltersComponent],
  imports: [
    CommonModule,
    LaunchProgramRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LaunchProgramModule { }
