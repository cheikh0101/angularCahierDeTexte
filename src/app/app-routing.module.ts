import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'edit/:id', component: EmployeeEditComponent },
  { path: 'dashboard', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
