import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateProfileComponent,
  },
  {
    path: 'display-profiles',
    component: DisplayProfilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
