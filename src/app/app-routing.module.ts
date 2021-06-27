import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  // we will write the routings specifications for all modules to load them dynamically as per the usage.
  // user
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
