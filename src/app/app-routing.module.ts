import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './ProductF/list/list.component';
import { UpdateFComponent } from './ProductF/update-f/update-f.component';
import { UpdateHComponent } from './ProductH/update-h/update-h.component';
import { List_hComponent } from './ProductH/list-h/list-h.component';
import { UpdateEComponent } from './ProductE/update-e/update-e.component';
import { List_eComponent } from './ProductE/list-e/list-e.component';
import { AccueilComponent } from './accueil/accueil.component';





const routes: Routes = [
  { path: 'ProduitF', component: ListComponent },
  { path: 'updateF/:id', component: UpdateFComponent },
  { path: 'ProduitH', component: List_hComponent },
  { path: 'updateH/:id', component: UpdateHComponent },
  { path: 'ProduitE', component: List_eComponent },
  { path: 'updateE/:id', component: UpdateEComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
