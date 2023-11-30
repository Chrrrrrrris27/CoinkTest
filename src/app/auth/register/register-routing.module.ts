import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneComponent } from './screens/cellphone/cellphone.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';

const routes: Routes = [
  {
    path: "",
    component: MainScreenComponent,
    children: [
      {
        path: "",
        component: CellphoneComponent
      },
      {
        path: "**",
        redirectTo: ""
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
