import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroundZeroPage } from './ground-zero';

@NgModule({
  declarations: [
    GroundZeroPage,
  ],
  imports: [
    IonicPageModule.forChild(GroundZeroPage),
  ],
})
export class GroundZeroPageModule {}
