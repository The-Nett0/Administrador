import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { stringify } from 'querystring';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  titulo:string;
  constructor(  private _sRouter:Router,private _stitulo:Title,private _SMta:Meta ) {
    
 
    this._sRouter.events.pipe(
      filter( e=> e instanceof ActivationEnd ),
      filter( (a:ActivationEnd) => a.snapshot.firstChild === null ),
      map( ( a:ActivationEnd )=> a.snapshot.data  )

    ).subscribe( r => {this.titulo = r.titulo;
                        this._stitulo.setTitle( this.titulo );
                          const metaTag: MetaDefinition = {
                            name :' un poco de sero a esta pagina',
                            content:this.titulo
                          };

                          this._SMta.updateTag( metaTag );
                          
                          }
     )


   }//fin del contructor

  ngOnInit() {
  }






}
