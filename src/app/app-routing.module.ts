import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'dashboard', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
