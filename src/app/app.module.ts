import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { EntryComponent } from "./views/entry/entry.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { EntryListComponent } from "./components/entry-list/entry-list.component";

import { MatTableModule } from "@angular/material/table";
import { LabelComponent } from "./components/label/label.component";
import { NewEntryModalComponent } from "./components/modal/new-entry/new-entry-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { LabelEditComponent } from "./components/label-edit/label-edit.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { TypeComponent } from "./views/type/type.component";
import { NewTypeComponent } from "./components/modal/new-type/new-type.component";
import { TypeListComponent } from './components/type-list/type-list.component';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { InfoComponent } from './components/info/info.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EntryComponent,
    DashboardComponent,
    EntryListComponent,
    LabelComponent,
    NewEntryModalComponent,
    LabelEditComponent,
    TypeComponent,
    NewTypeComponent,
    TypeListComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
