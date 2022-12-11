import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FemmeService } from './service/femme.service';
import { ListComponent } from './ProductF/list/list.component';
import { UpdateFComponent } from './ProductF/update-f/update-f.component';
import { UpdateHComponent } from './ProductH/update-h/update-h.component';
import { UpdateEComponent } from './ProductE/update-e/update-e.component';
import { List_hComponent } from './ProductH/list-h/list-h.component';
import { List_eComponent } from './ProductE/list-e/list-e.component';
import { HommeService } from './service/homme.service';
import { EnfantService } from './service/enfant.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateFComponent,
    UpdateHComponent,
    List_hComponent,
    UpdateEComponent,
    List_eComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FemmeService,HommeService,EnfantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
