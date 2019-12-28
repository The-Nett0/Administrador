import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { CharedModule } from '../shared/shared.module';
import { PAGES_RUTITA } from './pages.routes';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        
    ],

    exports:[ //esto tmb se exportara
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
    
        
    ],
    imports:[
        CharedModule,
        PAGES_RUTITA
    ]





})


export class PagessModule{}