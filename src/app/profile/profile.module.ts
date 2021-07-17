import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptors } from '../shared/interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
