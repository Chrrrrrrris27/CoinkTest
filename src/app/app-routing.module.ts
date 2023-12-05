import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/screens/home/home.component';
import { StartPageComponent } from './shared/start-page/start-page.component';
import { WecolmeComponent } from './home/screens/wecolme/wecolme.component';

const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "welcome",
    pathMatch: "full",
    component: WecolmeComponent
  },
  {
    path: "",
    pathMatch: "full",
    component: StartPageComponent
  },
  {
    path: "register",
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "**",
    redirectTo: ""
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
