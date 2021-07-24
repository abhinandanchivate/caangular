import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';
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
  {
    path: 'display-profile/:id',
    component: DisplayProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
