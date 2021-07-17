import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../profile/services/profile.service';
import { httpInterceptors } from '../shared/interceptors';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class DashboardModule {}
