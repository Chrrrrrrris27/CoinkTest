import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { CellphoneComponent } from './screens/cellphone/cellphone.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MainScreenComponent,
    CellphoneComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule.forRoot()
  ]
})
export class RegisterModule { }
