import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { faSignOutAlt, faUserCircle, fas } from '@fortawesome/free-solid-svg-icons';
import { CommonSharedModule } from './shared/modules/common-shared/common-shared.module';
import { SharedMaterialModule } from './shared/modules/material/shared-material.module';
import { ComponentsModule } from './shared/modules/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    CommonSharedModule,
    SharedMaterialModule,
    ComponentsModule,
  ],
  exports: [
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatMenuModule,
    SharedMaterialModule,
    ComponentsModule
  ],
  providers: [
    DatePipe,
  ],
  // entryComponents: [ConfirmDialogComponent]
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faUserCircle, faSignOutAlt);
  }
 }
