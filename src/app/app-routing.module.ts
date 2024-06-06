import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { ProductListComponent } from './components/Products/product-list/product-list.component';
import { ProductFormComponent } from './components/Products/product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ProductListComponent', component: ProductListComponent },
  { path: 'ProductFormComponent', component: ProductFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }