import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DisplayExpDetailsComponent } from './components/display-exp-details/display-exp-details.component';
import { DisplayEduDetailsComponent } from './components/display-edu-details/display-edu-details.component';

@NgModule({
  declarations: [DashboardComponent, DashboardActionComponent, DisplayExpDetailsComponent, DisplayEduDetailsComponent],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class DashboardModule {}
