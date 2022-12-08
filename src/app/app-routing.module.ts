import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './ProductF/list/list.component';
import { UpdateFComponent } from './ProductF/update-f/update-f.component';

const routes: Routes = [
  {path : 'ProduitF' , component : ListComponent},
  {path : 'updateF/:id' , component : UpdateFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
