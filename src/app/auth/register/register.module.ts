import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { CellphoneComponent } from './screens/cellphone/cellphone.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { TelPipe } from '../../shared/pipes/tel.pipe';
import { AccountDataComponent } from './screens/account-data/account-data.component';
import { RegisterHeaderComponent } from './components/register-header/register-header.component';
import { TermsComponent } from './screens/terms/terms.component';


@NgModule({
  declarations: [
    MainScreenComponent,
    CellphoneComponent,
    AccountDataComponent,
    TermsComponent,
    RegisterHeaderComponent,
    TelPipe
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
