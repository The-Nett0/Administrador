import { PagesComponent } from "./pages.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { Routes, RouterModule } from '@angular/router';

const PageRuta: Routes = [
    {
        path:'',component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1',component:Graficas1Component},
            {path:'',component:ProgressComponent}
        ]
    }
]


///todo es to un router outl que esta dentro de otro Router oulet, uff
export const PAGES_RUTITA = RouterModule.forChild( PageRuta )