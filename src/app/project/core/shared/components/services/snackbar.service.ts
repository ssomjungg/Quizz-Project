import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  getSnackbar() {
    return this.snackBar;
  }

  getInfoConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.direction = 'ltr';
    config.panelClass = ['info-snack'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    return config;
  }

  getSuccessConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.direction = 'ltr';
    config.panelClass = ['success-snack'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    return config;
  }

  getErrorConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    //config.duration = 5000;
    config.direction = 'ltr';
    config.panelClass = ['danger-snack'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    return config;
  }

  getWarnConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.direction = 'ltr';
    config.panelClass = ['warn-snack'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    return config;
  }

  openSnackBar(message: string, action?: string, config?: MatSnackBarConfig): MatSnackBarRef<SimpleSnackBar> {
    if (!config) {
      config = this.getInfoConfig();
    }
    const snackBarRef = this.snackBar.open(message, action, config);
    return snackBarRef;
  }

  open(message: string, type: 'W' | 'E' | 'S' | string): MatSnackBarRef<SimpleSnackBar> {
    let config: MatSnackBarConfig;

    if (type === 'W') {
      config = this.getWarnConfig();
    } else if (type === 'E') {
      config = this.getErrorConfig();
      return this.snackBar.open(message, 'X', config);
    } else if (type === 'S') {
      config = this.getSuccessConfig();
    } else {
      config = this.getInfoConfig();
    }

    return this.snackBar.open(message, undefined, config);
  }

  // 10/09/2021 thanat.s 2020CAAT-2484 - เพิ่มการเปิด snackbar with class
  openSnackBarErrorWithClass(message: string, className: string): MatSnackBarRef<SimpleSnackBar> {
    let config: MatSnackBarConfig = this.getErrorConfig();
    config = this.addPanelClass(className, config)
    const snackBarRef = this.snackBar.open(message, 'X', config);
    return snackBarRef;
  }

  // 10/09/2021 thanat.s 2020CAAT-2484 - add class ให้ snackbar
  private addPanelClass(className: string, snackBarConfig: MatSnackBarConfig){
    const config: any = snackBarConfig;
    // check type string
    if (typeof(config.panelClass) === 'string') {
      config.panelClass = [config.panelClass, className];
    } else {
    // check type array
      config.panelClass ? config.panelClass.push(className) :
      config.panelClass = className;
    }
    return (config as MatSnackBarConfig);
  }
}
