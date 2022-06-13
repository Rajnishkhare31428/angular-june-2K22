import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { EarphonesComponent } from './earphones/earphones.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvsComponent } from './tvs/tvs.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { EhomeComponent } from './ehome/ehome.component';


@NgModule({
  declarations: [
    EarphonesComponent,
    KeyboardComponent,
    MobileComponent,
    TvsComponent,
    SmartwatchComponent,
    EhomeComponent
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
