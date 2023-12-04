import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CellphoneComponent } from './screens/cellphone/cellphone.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { AccountDataComponent } from './screens/account-data/account-data.component';
import { TermsComponent } from './screens/terms/terms.component';

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
        path: "userdata",
        component: AccountDataComponent
      },
      {
        path: "terms",
        component: TermsComponent
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
