import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialAngularSelectModule } from 'material-angular-select';
import { ThemeModule } from 'theme';

import { IsasDashboardComponent } from './isas-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    MaterialAngularSelectModule,
  ],
  declarations: [
    IsasDashboardComponent,
  ],
})
export class IsasDashboardModule {}
