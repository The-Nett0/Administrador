import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    // {
    //     path:'',component:PagesComponent,
    //     children:[
    //         {path:'dashboard',component:DashboardComponent},
    //         {path:'progress',component:ProgressComponent},
    //         {path:'graficas1',component:Graficas1Component},
    //         {path:'',component:ProgressComponent}
    //     ]
    // },

   
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
   {path:'**',component:NopagefoundComponent}
    //{path:'',redirectTo:'/dashboard',pathMatch:'full'},
    

 
];

export const APP_RUTITA = RouterModule.forRoot( appRoutes , { useHash:true } )