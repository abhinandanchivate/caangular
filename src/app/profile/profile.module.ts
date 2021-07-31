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
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';
import { ProfileHeaderComponent } from './components/display/display-profile/profile-header/profile-header.component';
import { ProfileAboutComponent } from './components/display/display-profile/profile-about/profile-about.component';
import { ProfileCredsComponent } from './components/display/display-profile/profile-creds/profile-creds.component';
import { ProfileGithubComponent } from './components/display/display-profile/profile-github/profile-github.component';
import { ProfileExperienceComponent } from './components/display/display-profile/profile-experience/profile-experience.component';
import { ProfileEducationComponent } from './components/display/display-profile/profile-education/profile-education.component';

@NgModule({
  declarations: [
    CreateProfileComponent,
    AddExperienceComponent,
    AddEducationComponent,
    DisplayProfilesComponent,
    DisplayProfileItemComponent,
    DisplayProfileComponent,
    ProfileHeaderComponent,
    ProfileAboutComponent,
    ProfileCredsComponent,
    ProfileGithubComponent,
    ProfileExperienceComponent,
    ProfileEducationComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
