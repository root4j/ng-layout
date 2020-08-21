import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { SimpleComponent } from './simple/simple.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'forms', component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
