import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Femme } from './Model/femme.model';
import { FemmeService } from './service/femme.service';
import { Homme } from './Model/homme.model';
import { HommeService } from './service/homme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-application-isitcom';

}
