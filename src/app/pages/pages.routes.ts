import { PagesComponent } from "./pages.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { FcrpmexComponent } from './fcrpmex/fcrpmex.component';

const PageRuta: Routes = [
    {
        path:'',component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboardComponent,data:{ titulo:'dasbarcito'  }  },
            {path:'progress',component:ProgressComponent ,data:{ titulo:'progresito'  } },
            {path:'graficas1',component:Graficas1Component,data:{ titulo:'grafciito'  }},
            {path:'fcrpmex',component:FcrpmexComponent,data:{ titulo:'Dashboard hecho el data'  }},
            {path:'account-settings',component:AccountSettingsComponent,data:{ titulo:'cuentita'  }},
            {path:'promesas',component:PromesasComponent,data:{ titulo:'promesita'  }},
            {path:'',component:ProgressComponent,data:{ titulo:'progresito2'  }}
        ]
    }
]


///todo es to un router outl que esta dentro de otro Router oulet, uff
export const PAGES_RUTITA = RouterModule.forChild( PageRuta )