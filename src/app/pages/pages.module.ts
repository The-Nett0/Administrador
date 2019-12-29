import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { CharedModule } from '../shared/shared.module';
import { PAGES_RUTITA } from './pages.routes';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { IncrementadorComponent } from '../componentes/incrementador/incrementador.component';
import { GrafikitoComponent } from '../componentes/grafikito/grafikito.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

import { FcrpmexComponent } from './fcrpmex/fcrpmex.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GrafikitoComponent,
        AccountSettingsComponent,
        PromesasComponent,
       
        FcrpmexComponent
    ],

    exports:[ //esto tmb se exportara
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        GrafikitoComponent
    ],

    imports:[
        CharedModule,
        PAGES_RUTITA,
        FormsModule,
        ChartsModule,
    ]
})


export class PagessModule{}