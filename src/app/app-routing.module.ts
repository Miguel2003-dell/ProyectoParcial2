import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { ProductListComponent } from './components/Products/product-list/product-list.component';
import { UsuariosListComponent } from './components/Usuarios/usuarios-list/usuarios-list.component';
import { LoginComponent } from './components/login/login/login.component';
import { VentasComponent } from './components/Products/ventas/ventas.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'usuarios-list', component: UsuariosListComponent },
  { path: 'ventas-list', component: VentasComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }