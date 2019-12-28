import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsettingsService,SharedService,SidebarService } from './service.indice'

@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule
  ],

//no vno con esto , aqui juntamo el service.indice( que junta todo emn un archiv para si 
//cmbio lgo de luar solocambie la ruta de ese archivo , pue en los demas ,esta ruta tomaran ) y de aui lo mandamo al app.module
providers:[
  AsettingsService,
  SharedService,
  SidebarService

],


})
export class ServiceModule { }
