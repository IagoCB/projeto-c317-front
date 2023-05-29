import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { EntryListComponent } from "./components/entry-list/entry-list.component";
import { LabelComponent } from "./components/label/label.component";
import { NewEntryModalComponent } from "./components/modal/new-entry/new-entry-modal.component";
import { LabelEditComponent } from "./components/label-edit/label-edit.component";
import { NewTypeComponent } from "./components/modal/new-type/new-type.component";
import { TypeListComponent } from "./components/type-list/type-list.component";
import { InfoComponent } from "./components/info/info.component";
import { EditEntryComponent } from "./components/modal/edit-entry/edit-entry.component";
import { LabelNewComponent } from "./components/label-new/label-new.component";
import { EditTypeComponent } from "./components/modal/edit-type/edit-type.component";
import { ChartBudgetComponent } from "./components/chart-budget/chart-budget.component";
import { DeleteEntryComponent } from "./components/modal/delete-entry/delete-entry.component";
import { LabelDeleteComponent } from "./components/label-delete/label-delete.component";
import { DeleteTypeComponent } from "./components/modal/delete-type/delete-type.component";
import { ChartBudgetMainComponent } from "./components/chart-budget-main/chart-budget-main.component";
import { MonthlyFollowUpComponent } from "./components/monthly-follow-up/monthly-follow-up.component";

import { EntryComponent } from "./views/entry/entry.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { TypeComponent } from "./views/type/type.component";
import { BudgetComponent } from "./views/budget/budget.component";

import { NgxEchartsModule } from "ngx-echarts";

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
    EditEntryComponent,
    LabelNewComponent,
    EditTypeComponent,
    ChartBudgetComponent,
    DeleteEntryComponent,
    LabelDeleteComponent,
    DeleteTypeComponent,
    BudgetComponent,
    ChartBudgetMainComponent,
    MonthlyFollowUpComponent,
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
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    MatSnackBarModule,
    HttpClientModule,
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
