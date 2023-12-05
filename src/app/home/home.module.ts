import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './screens/home/home.component';
import { IonicModule } from '@ionic/angular';
import { WecolmeComponent } from './screens/wecolme/wecolme.component';


@NgModule({
  declarations: [
    HomeComponent,
    WecolmeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
