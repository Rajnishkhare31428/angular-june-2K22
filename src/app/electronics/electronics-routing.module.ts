import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarphonesComponent } from './earphones/earphones.component';
import { EhomeComponent } from './ehome/ehome.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

const routes: Routes = [
  {
    path: '', component: EhomeComponent
  },
  {
    path: 'earphons', component: EarphonesComponent
  },
  {
    path: 'keyboard', component: KeyboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
