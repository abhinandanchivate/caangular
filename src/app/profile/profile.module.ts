import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { httpInterceptors } from '../shared/interceptors';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';
import { DisplayProfileItemComponent } from './components/display/display-profile-item/display-profile-item.component';

@NgModule({
  declarations: [CreateProfileComponent, AddExperienceComponent, AddEducationComponent, DisplayProfilesComponent, DisplayProfileItemComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
