import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertDialogComponent } from '../../components/alert-dialog/alert-dialog.component';
import { SharedMaterialModule } from '../material/shared-material.module';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

const modules = [
  ReactiveFormsModule,
  HttpClientModule,
  SharedMaterialModule,
];

@NgModule({
  declarations: [AlertDialogComponent, ConfirmDialogComponent],
  imports: [CommonModule, ...modules],
  exports: [...modules],

})
export class CommonSharedModule {}
