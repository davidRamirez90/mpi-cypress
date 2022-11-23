import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestFormComponent} from "./test-form/test-form.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  {
    path: '',
    component: TestFormComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
