import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }  from './app.component';
import { CollectibleFormComponent } from './collectible-form.component';
import { CollectibleViewComponent } from './collectible-view.component';
import { CollectibleListComponent } from './collectible-list.component';

const appRoutes: Routes = [
	{ path: 'collectible-view', component: CollectibleViewComponent },
	{ path: 'collectible-list', component: CollectibleListComponent },
	{ path: 'collectible-form', component: CollectibleFormComponent },
	{ path: '', redirectTo: '/collectible-list', pathMatch: 'full' }
];

@NgModule({
  imports:      [ 
  	RouterModule.forRoot(appRoutes),
  	BrowserModule,
  	FormsModule 
  ],
  declarations: [ 
  	AppComponent,
  	CollectibleFormComponent,
  	CollectibleListComponent,
  	CollectibleViewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
