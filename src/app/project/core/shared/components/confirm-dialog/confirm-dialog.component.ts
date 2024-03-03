import { Component, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmDialog } from './models/confirm-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent implements OnDestroy {
  translateSub!: Subscription;
  language$: any;
  option: ConfirmDialog = {
    header: 'Confirm Message',
    description: 'Default content',
    cancelText: 'cancel',
    confirmText: 'confirm',
    actionColor: 'primary',
  };
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    // public translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog
  ){
    dialogRef.disableClose = true;
    if (data) {
      this.option = { ...this.option, ...data };
    }
    // this.translate.get('cancel').subscribe((value) => {
    //   this.option.cancelText = value;
    // });
    // this.translate.get('confirm').subscribe((value) => {
    //   this.option.confirmText = value;
    // });
  }

  ngOnDestroy() {
    if (this.translateSub) { this.translateSub.unsubscribe(); }
  }
}
