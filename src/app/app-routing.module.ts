import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { EntryComponent } from "./views/entry/entry.component";
import { TypeComponent } from "./views/type/type.component";
import { BudgetComponent } from "./views/budget/budget.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "entry",
    component: EntryComponent,
  },
  {
    path: "type",
    component: TypeComponent,
  },
  {
    path: "budget",
    component: BudgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
