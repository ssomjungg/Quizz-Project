import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BamLabelComponent } from './components/bam-label/bam-label.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BamLabelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    BamLabelComponent
  ]
})
export class ComponentsModule { }
