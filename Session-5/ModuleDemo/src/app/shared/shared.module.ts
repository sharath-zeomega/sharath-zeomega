import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonComponent } from './common/common.component';
import { ChangeColorDirective } from './ChangeColor';
import { CustomPipe } from './customPipe';


@NgModule({
  declarations: [
    CommonComponent,
    ChangeColorDirective,
    CustomPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CommonComponent,
    ChangeColorDirective,
    CustomPipe
  ]
})
export class SharedModule { }
