import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { ContentComponent } from './modules/content/content.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CadastroOrgComponent } from './modules/org/cadastro-org/cadastro-org.component'
import { CadastroScheduleComponent } from './modules/schedule/cadastro-schedule/cadastro-schedule.component';
import { ListScheduleComponent } from './modules/schedule/list-schedule/list-schedule.component';
import { ListOrgComponent } from './modules/org/list-org/list-org.component';
import { ModalDetailsOrgComponent } from './modules/org/modals/modal-details-org/modal-details-org.component';
import { ModalDetailsScheduleComponent } from './modules/schedule/modals/modal-details-schedule/modal-details-schedule.component';
import { ModalDeleteScheduleComponent } from './modules/schedule/modals/modal-delete-schedule/modal-delete-schedule.component';

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroOrgComponent,
    CadastroScheduleComponent,
    ListScheduleComponent,
    ListOrgComponent,
    ModalDetailsOrgComponent,
    ModalDetailsScheduleComponent,
    ModalDeleteScheduleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
