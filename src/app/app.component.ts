import { Component } from '@angular/core';
import { AsettingsService } from './services/service.indice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPro';

  constructor( public _ajustes:AsettingsService ){

  }
}
