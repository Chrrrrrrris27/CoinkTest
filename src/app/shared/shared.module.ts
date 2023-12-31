import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StartPageComponent } from './start-page/start-page.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [StartPageComponent, LoaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class SharedModule { }
